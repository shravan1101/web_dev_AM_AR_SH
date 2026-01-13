class Animal {
  constructor(name) {
    this.name = name;
    console.log("Animal Constructor Called");
  }
  eats() {
    console.log("Animal eats");
  }
  jumps() {
    console.log("Animal jumps");
  }
}

let a = new Animal("niscay_ :)");
a.eats();
a.jumps();
console.log(a.name);

class Lion extends Animal {
  constructor(name) {
    super(name); // calls the parent class constructor
    /*
            what does super do here?
             Animal.call(this, name);
            */

    console.log("Lion Constructor Called");
  }
  eats() {
    console.log("Before calling super.eats()");
    super.eats(); // calls the parent class method
    console.log("Lion eats");
  }
}

let s = new Lion("Simba");
s.eats();
s.jumps();
console.log(s.name);
// Lion's prototype is Animal
s.eats();
// a.eats();
// s.super.eats(); // error // no such thing as super property on instance

/*

## 1️⃣ What is `instanceof`?

The **`instanceof` operator** is used to check:

> ❓ **Was this object created from this class (constructor)?**

It returns:

* ✅ `true`
* ❌ `false`

---

## 2️⃣ Basic syntax

```js
object instanceof ClassName
```

---

## 3️⃣ Simple example

```js
class Animal {}

let a = new Animal();

console.log(a instanceof Animal); // true
```

Why?
Because `a` was created using `new Animal()`.

---

## 4️⃣ With inheritance (important)

```js
class Animal {}
class Lion extends Animal {}

let l = new Lion();

console.log(l instanceof Lion);   // true
console.log(l instanceof Animal); // true
```

### Why both are `true`?

Because of the **prototype chain**:

```
l
↓
Lion.prototype
↓
Animal.prototype
↓
Object.prototype
↓
null
```

`instanceof` checks this chain.

---

## 5️⃣ How `instanceof` works internally

```js
l instanceof Animal
```

JavaScript asks:

> Is `Animal.prototype` present anywhere in `l`’s prototype chain?

✔️ Yes → `true`

---

## 6️⃣ Example with built-in objects

```js
let arr = [1, 2, 3];

arr instanceof Array;  // true
arr instanceof Object; // true
```

Because:

```
Array → Object
```

---

## 7️⃣ Common mistake 🚫

```js
typeof arr; // "object"
```

So people try:

```js
typeof arr === "array"; // ❌ wrong
```

Correct way:

```js
arr instanceof Array; // ✅
```

---

## 8️⃣ `instanceof` vs `typeof`

| Feature            | instanceof      | typeof    |
| ------------------ | --------------- | --------- |
| Checks             | object relation | data type |
| Works with classes | ✅               | ❌         |
| Arrays             | ✅               | ❌         |
| Primitives         | ❌               | ✅         |

Example:

```js
typeof 10;           // "number"
10 instanceof Number // false
```

---

## 9️⃣ Real-life analogy

Think of:

* **Class** = Factory
* **Object** = Product

`instanceof` asks:

> ❓ Was this product made in this factory?

---

## 🔟 One-line summary

> **`instanceof` checks whether an object belongs to a class by looking at its prototype chain.**

---

If you want next, I can explain:

* difference between `instanceof` and `constructor`
* edge cases where `instanceof` fails
* interview questions
* custom `instanceof` behavior


*/