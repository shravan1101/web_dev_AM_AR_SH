class complex {
  constructor(real, part) {
    this.real = real;
    this.part = part;
  }
  display() {
    console.log(`${this.real} + ${this.part}i`);
  }
}
let a = new complex(1, 2);
a.display();
