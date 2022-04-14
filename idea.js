//insert html here


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
  id: //unique Identifier - numeric
  title: ""
  body: ""
  star: //true or false
}
]

var ideaBoxDetails = document.querySelector()
