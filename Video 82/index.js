async function sleep() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(45);
    }, 1000);
  });
}

// let a = await sleep(); this will throw an error because top-level await is not supported in all environments
// let b = await sleep();

(async function () {
  // this is rapped in an async IIFE // immediately invoked function expression
  let a = await sleep();
  console.log(a);
  let b = await sleep();
  console.log(b);
})();

let [x, y] = [10, 20]; // destructuring assignment
console.log(x, y);

let [a, b, ...rest] = [1, 2, 3, 4, 5, 6]; // rest operator
console.log(a, b, rest);

// destructuring with objects
let obj = {
  a: "shravan",
  b: "bhise",
  c: 3,
};

//   let [a,b] = obj; // this will throw an error because obj is not iterable
let { a: h, b: g } = obj; // correct way to destructure an object
console.log(a, b);
console.log(h, g);
// sprad syntax
let arr1 = [1, 2, 3];
console.log(sum(arr[0], arr[1], arr[2]));
console.log(sum(...arr1)); // spread syntax
// while the time of decleration
/* 

var is a keyword in JavaScript that declares a variable with function scope or global scope. It is used to declare variables in a function or globally.

it move the var to the top of the function or global scope.

*/


/* You mean **hoisting difference between function declarations and normal (function expression / arrow) functions** 👍
Let’s explain this **clearly, step-by-step**, with examples and diagrams.

![Image](https://miro.medium.com/1%2AeZlrQJ8B7ObYrAJjUBW8GA.png)

![Image](https://miro.medium.com/v2/resize%3Afit%3A2000/1%2A0v6veeFTYaco_VASW1vurA.png)

![Image](https://miro.medium.com/v2/resize%3Afit%3A1024/1%2AmoaAsvvKS0EQG-yvodi2aA.png)

---

## 1️⃣ What is **Hoisting**?

**Hoisting** means:

> JavaScript **moves declarations to the top of the scope** before executing the code.

⚠️ Important:

* Only **declarations** are hoisted
* **Assignments are NOT hoisted**

---

## 2️⃣ Function Declaration (Fully Hoisted) ✅

### Example:

```js
sayHello();

function sayHello() {
  console.log("Hello");
}
```

### ✔ Works fine

Why?

* The **entire function body** is hoisted
* JS knows the function **before execution starts**

### Internally JS sees:

```js
function sayHello() {
  console.log("Hello");
}

sayHello();
```

---

## 3️⃣ Function Expression (NOT Fully Hoisted) ❌

### Example:

```js
sayHi();

const sayHi = function () {
  console.log("Hi");
};
```

### ❌ Error:

```
Cannot access 'sayHi' before initialization
```

Why?

* `sayHi` is a variable
* Only the **variable name** is hoisted
* The function value is assigned **later**

---

## 4️⃣ Arrow Function (Same as Function Expression) ❌

```js
sayBye();

const sayBye = () => {
  console.log("Bye");
};
```

❌ Same error
Arrow functions are **NOT hoisted as functions**

---

## 5️⃣ `var` vs `let` / `const` (IMPORTANT)

### With `var`:

```js
say();

var say = function () {
  console.log("Hello");
};
```

❌ Error:

```
say is not a function
```

Why?

```js
var say; // hoisted as undefined
say();   // undefined()
```

---

## 6️⃣ Summary Table (VERY IMPORTANT)

| Feature                    | Function Declaration | Function Expression | Arrow Function |
| -------------------------- | -------------------- | ------------------- | -------------- |
| Hoisted                    | ✅ Fully              | ❌ Partially         | ❌ Partially    |
| Can call before definition | ✅ Yes                | ❌ No                | ❌ No           |
| Stored as                  | Function             | Variable            | Variable       |
| Uses `this`                | Dynamic              | Dynamic             | Lexical        |

---

## 7️⃣ Diagram (mental model)

```
HOISTING PHASE
─────────────
function declaration → FULLY available
var variable → undefined
let / const → temporal dead zone

EXECUTION PHASE
───────────────
Assignments happen
```

---

## 8️⃣ Interview-ready one-liner 🧠

> **Function declarations are fully hoisted, but function expressions and arrow functions are not, because they depend on variable assignment.**

---

## 🔑 Final takeaway

✔ Call function declarations anytime
❌ Call function expressions ONLY after definition
❌ Arrow functions behave like variables

---

If you want, I can also explain:

* hoisting with `class`
* temporal dead zone (TDZ)
* real interview trick questions
* or draw a **timeline execution diagram**
 */

