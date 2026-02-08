class complex {
  constructor(real, part) {
    this.real = real;
    this.part = part;
  }
  // getter
  get getReal() {
    return this.real;
  }
  get getPart() {
    return this.part;
  }

  set setReal(real) {
    this.real = real;
  }
  set setPart(part) {
    this.part = part;
  }

  display() {
    console.log(`${this.getReal} + ${this.getPart}i`);
  }
}
let a = new complex(5, 6);
a.display();

a.setReal = 10;
a.setPart = 15;
a.display();
