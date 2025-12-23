class complex {
  constructor(real, part) {
    this.real = real;
    this.part = part;
  }
  display() {
    console.log(`${this.real} + ${this.part}i`);
  }
}

class complex_add {
  constructor(c1, c2) {
    this.real = c1.real + c2.real;
    this.part = c1.part + c2.part;
  }
  display() {
    console.log(`${this.real} + ${this.part}i`);
  }
}

let a = new complex(1, 2);
a.display();

let b = new complex(3, 4);
b.display();

let c = new complex_add(a, b);
c.display();
