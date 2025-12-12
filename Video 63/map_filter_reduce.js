let arr = [2, 4, 6, 8, 10];
let new_arr = [];

for (let i = 0; i < arr.length; i++) {
  const element = arr[i];
  new_arr.push(element * 2);
}
console.log(new_arr);
// using map function ;

let maparr = arr.map((e, index, arr) => {
  return e * 2;
});
console.log(maparr);

// filter function ;
function gerter(e) {
  if (e > 5) {
    return true;
  } else {
    return false;
  }
}

console.log(arr.filter(gerter));

//reduce function ;
let arr4 = [1, 2, 3, 4, 5];

const red = (a, b) => {
  return a * b;
};
console.log(arr4.reduce(red)); // it will return the single value after applying the function on all elements of array ;

//arry.from function ;
let str = "12345";
let arr5 = Array.from(str);
console.log(arr5); // it will convert string into array of characters ;

//function and const functions;
/*

Here is a **simple & clear note for your notebook**, with **examples** — no extra theory, easy to revise 👇

---

## 📌 Why use `const` to make functions (instead of `function` keyword)

### 🔥 Reason 1 — `const` prevents overwriting (safer)

```js
const add = (a, b) => a + b;
add = 10;   // ❌ Error — function cannot be replaced accidentally
```

```js
function add(a, b) { return a + b; }
add = 10;   // ✔ Allowed — unsafe because function got replaced
```

---

### 🔥 Reason 2 — `const` has block scope

```js
if (true) {
  const greet = () => console.log("Hello");
}
greet(); // ❌ Not available outside block (safe)
```

---

### 🔥 Reason 3 — No automatic hoisting (better control)

```js
sayHello();   // ❌ Error — cannot use before definition
const sayHello = () => console.log("Hi");
```

```js
sayHello();   // ✔ Works — function is hoisted
function sayHello() { console.log("Hi"); }
```

> `const` makes sure you define the function before using it.

---

### 📌 Summary sentence for notes

```
Using const to create functions is safer and more modern because the
function cannot be overwritten, has block scope, and does not get hoisted automatically.
```

---

### 💯 Final best practice line (write this in big letters)

```
Modern JavaScript recommends: const functionName = () => { ... }
```

---

If you want, I can also give **a one-page PDF of perfect notes on functions** (normal vs const vs arrow). Just tell me ✔️
*/