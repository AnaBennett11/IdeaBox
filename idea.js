class Idea() {
  constructor(id, title, body, star) {
    this.id = id;
    this.title = title;
    this.body = body;
    this.star = false;
  }

// saveToStorage(){
//
// }
// deleteFromStorage(){
//
// }
updateIdea(){
  console.log("initial value", this.star)
if (this.star === false) {
  this.star = true
  console.log("click", this.star)
}
}

}

var ideaBoxDetails = [
{
  id: Date.now()
  title: "Idea title";
  body: "Idea body. Don't ever play yourself. Every chance I get, I water the plants, Lion! Cloth talk.";
  star: false;
}
]

var ideaBoxDetails = document.querySelector()
