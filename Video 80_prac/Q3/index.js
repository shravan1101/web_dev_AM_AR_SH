class human {
  constructor() {
    console.log("Human created");
  }
  display() {
    console.log("I am a human");
  }
}
class student extends human {
  constructor() {
    super();
    console.log("Student created");
  }
  display() {
    console.log("I am a student");
    super.display();
  }
}

let shravan = new student();

console.log(shravan instanceof student); // true
console.log(shravan instanceof human); // true

shravan.display();
