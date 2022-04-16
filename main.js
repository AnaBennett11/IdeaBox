
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

wrapper.addEventListener("click", removeIdea)


//functions go here

function pushCard () {
var idea = new Idea (titleInput.value, bodyInput.value)
ideas.push(idea);
console.log(ideas);
  }

function displayCard () {
  wrapper.innerHTML = "";
  //i'm gonna create a for loop inside of this array to pull the title and body
  for(var i = 0; i < ideas.length; i++) {
    console.log(ideas[i].title);
    wrapper.innerHTML += `
    <box class="box">
      <section class="top-bar">
        <button class="top-card-button" "inactive-star"><img class="card-img" id="top-icon" src="assets/star-active.svg" alt="color-star">
        </button>
        <button name="delete" class="top-card-button"><img class="card-img" id="${ideas[i].id}" src="assets/delete.svg" alt="blank-x">
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
  console.log(event.target.id);
   id = parseInt(event.target.id);
   ideas = ideas.filter(ideas => ideas.id !== id);
   displayCard();
}




// When we want to delete an idea, click the delete button
// and it removes the idea from the ideas array

// As a user,
//
// When I click the “Delete” button on an idea card,
// The card instance should be permanently removed from the ideas array
// The card should be permanently removed from my view
// As a user,
//
// When I click the “Star” button on an idea card,
// The card instance’s star property should be updated in the ideas array
// When the button was an outline of a star (not favorited), the button should now be a filled in star (favorited)
// and vice versa (for unfavoriting)
// As a user,
//
// When I delete or favorite any card,
// I should not see the page reload
