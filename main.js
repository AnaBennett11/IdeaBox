
var cardDetails = document.querySelectorAll(".box");
var saveButton = document.querySelector(".save");
var titleInput = document.querySelector("#title-id");
var bodyInput = document.querySelector("#body-id");
var wrapper = document.querySelector(".wrapper");
var deleteButton = document.querySelector("delete");

// elementList = parentNode.querySelectorAll(selectors)

var ideas = [];

//eventlisteners here

saveButton.addEventListener("click", function(event) {
  event.preventDefault();
  pushCard();
  displayCard();
  clearInputs();
})

titleInput.addEventListener("keyup", keyupFunction)
bodyInput.addEventListener("keyup", keyupFunction)

 wrapper.addEventListener("click", function(event) {
   // console.log(event.target.id);
   // console.log(event.target.nodeName);
   // console.log(event.target.classList.contains('button-favorite'));
   // console.log(event.target.classList.contains('button-delete'));
   // //removeIdea(event);
   //showStar(event);
   // if(nodeName === img && the class === buttonFavorite) {
   //   console.log("this is a favorite click");
   // } else if (nodeName === img && the class === buttonDelete){
   //   console.log("remove idea");
   // }
     if (event.target.nodeName.toLowerCase() == "img" && event.target.classList.contains("button-favorite")) {
       // console.log("favorite click");
        toggleFavorite(event);
     } else if (event.target.nodeName.toLowerCase() == "img" && event.target.classList.contains("button-delete")) {
        removeIdea(event); // console.log("delete click");
     }
 })


function toggleFavorite(event) {
//update the database with the users favorite preferences for selected card
//redisplay the cards
  for (var i = 0; i < ideas.length; i++) {
    if (`star${ideas[i].id}` === event.target.id) {
      console.log("the current favorite value is " + ideas[i].star);
      if (ideas[i].star === true) {
        ideas[i].star = false;
      }else{
        ideas[i].star = true;
      }
     }

    }
displayCard();

}


//functions go here

function pushCard () {
var idea = new Idea (titleInput.value, bodyInput.value)
ideas.push(idea);
console.log(ideas);
  }

function displayCard () {

  var imageSRC = "";



  wrapper.innerHTML = "";
  //i'm gonna create a for loop inside of this array to pull the title and body
  for(var i = 0; i < ideas.length; i++) {

    //  determine value of imageSRC.
    if (ideas[i].star === true) {
      imageSRC = "star-active.svg";
    }else{
      imageSRC = "star.svg";
    }

    wrapper.innerHTML += `
    <box class="box">
      <section class="top-bar">
        <button class="top-card-button"><img class="card-img button-favorite" id="star${ideas[i].id}" src="assets/${imageSRC}" alt="color-star">
        </button>
        <button name="delete" class="top-card-button"><img class="card-img button-delete" id="${ideas[i].id}" src="assets/delete.svg" alt="blank-x">
        </button>
      </section>
      <section class="middle-bar">
        <h3>${ideas[i].title}</h3>
        <p>${ideas[i].body}</p>
      </section>
      <section class="bottom-bar">
        <button class="bottom-card-button"><img class="card-img" src="assets/comment.svg" alt="circle-plus">
        </button>
        <h2>Comment</h2>
      </section>
    </box>`;
  }
}




function clearInputs() {
titleInput.value = null;
bodyInput.value = null;
keyupFunction();
}

function keyupFunction(event) {
  if (titleInput.value && bodyInput.value){
    saveButton.disabled = false;
  }else{
    saveButton.disabled = true;
  }
}

function removeIdea(event) {
   id = (event.target.id);
   // ideas = ideas.filter(ideas => ideas.id !== id);
   for (var i = 0; i < ideas.length; i++) {
     if (`${ideas[i].id}` === id) {
     ideas.splice(i, 1)
   }
 }
   // above line equals for each index in ideas, check if that id equals
   // event id.
   displayCard();
}

function showStar(event) {
  id = event.target.id;
  console.log(id)
  for (var i = 0; i < ideas.length; i++) {
    if (`star${ideas[i].id}` === id) {
      document.getElementById(id).src ="assets/star.svg";

  }
}
}
// As a user,
//
// When I click the “Star” button on an idea card,
// The card instance’s star property should be updated in the ideas array
// When the button was an outline of a star (not favorited), the button should now be a filled in star (favorited)
// and vice versa (for unfavoriting)
//
