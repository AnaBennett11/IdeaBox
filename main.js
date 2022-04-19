var cardDetails = document.querySelectorAll(".box");
var saveButton = document.querySelector(".save");
var titleInput = document.querySelector("#title-id");
var bodyInput = document.querySelector("#body-id");
var wrapper = document.querySelector(".wrapper");
var deleteButton = document.querySelector("delete");

var ideas = [];

saveButton.addEventListener("click", function(event) {
  event.preventDefault();
  pushCard();
  displayCard();
  clearInputs();
})

titleInput.addEventListener("keyup", keyupFunction)
bodyInput.addEventListener("keyup", keyupFunction)

wrapper.addEventListener("click", function(event) {
      if (event.target.nodeName.toLowerCase() == "img" && event.target.classList.contains("button-favorite")) {
        toggleFavorite(event);
      } else if (event.target.nodeName.toLowerCase() == "img" && event.target.classList.contains("button-delete")) {
        removeIdea(event);
  }
})

function toggleFavorite(event) {
  for (var i = 0; i < ideas.length; i++) {
    if (`star${ideas[i].id}` === event.target.id) {
      console.log("the current favorite value is " + ideas[i].star);
      if (ideas[i].star === true) {
        ideas[i].star = false;
      } else {
        ideas[i].star = true;
      }
    }
  }
displayCard();
}

function pushCard () {
var idea = new Idea (titleInput.value, bodyInput.value)
ideas.push(idea);
}

function displayCard () {
var imageSRC = "";
wrapper.innerHTML = "";
  for(var i = 0; i < ideas.length; i++) {
    if (ideas[i].star === true) {
      imageSRC = "star-active.svg";
    } else {
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
  if (titleInput.value && bodyInput.value) {
    saveButton.disabled = false;
  } else {
    saveButton.disabled = true;
  }
}
