
var cardDetails = document.querySelectorAll(".box");
var saveButton = document.querySelector(".save");
var titleInput = document.querySelector("#title-id");
var bodyInput = document.querySelector("#body-id");
// elementList = parentNode.querySelectorAll(selectors)

var ideas = [];

//eventlisteners here

saveButton.addEventListener("click", pushCard);


//functions go here

function pushCard () {
var idea = new Idea (titleInput.value, bodyInput.value)
ideas.push(idea);
console.log(ideas);
  }



//As a user,

// When I click “Save”,
// If I entered information in both the “Title” and “Body” input fields,
// I should see a new Idea instance with the provided title and body appear in the ideas array
// I should see a new idea card with the provided title and body appear on the DOM
