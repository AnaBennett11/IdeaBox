class Idea() {
  constructor(id, title, body, star) {
    this.id = id;
    this.title = title;
    this.body = body;
    this.star = false;
  }

updateIdea(){
  console.log("initial value", this.star)
if (this.star === false) {
  this.star = true
  console.log("click", this.star)
}
}

}
