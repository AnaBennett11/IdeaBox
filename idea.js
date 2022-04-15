class Idea {
  constructor (title, body) {
    this.id = Date.now();
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
