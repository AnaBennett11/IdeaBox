
var cardDetails = document.querySelectorAll(".box");
var saveButton = document.querySelector(".save");
var titleInput = document.querySelector("#title-id");
var bodyInput = document.querySelector("#body-id");
var wrapper = document.querySelector(".wrapper");
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
        <button class="top-card-button"><img class="card-img" id="top-icon" src="assets/delete.svg" alt="blank-x">
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





//As a user,

// When I click “Save”,
// If I entered information in both the “Title” and “Body” input fields,
// I should see a new Idea instance with the provided title and body appear in the ideas array
// I should see a new idea card with the provided title and body appear on the DOM
//the new info from the array needs to display on the card, once its in the array
// you want to display it in the application so the user can see it, innerHTML,
//we're gonna inject the html with the info that is in that array, create for loop inside of this array
//



// As a user,
//
// When I click “Save”,
// If I entered information in both the “Title” and “Body” input fields,
// I should see the “Title” and “Body” input fields clear out
//figure out how to resent my input fields to nothing
