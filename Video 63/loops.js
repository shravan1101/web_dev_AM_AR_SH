let a = [1, 2, 3, 4, 5];

// for (let i = 0; i < arr.length; i++) {
//     const element = arr[i];

// }

//foreach loop ;
a.forEach((value, index, arr) => {
  console.log(value, index, arr);
});

/*
Sure 👍 — here are **5 short examples of `forEach()` using `arr`** with clear comments for your notes:

---

### ✅ Example 1 — Access next element

```js
a.forEach((value, index, arr) => {
    console.log(value, "next =", arr[index + 1]); // arr helps access next item
});
```

---

### ✅ Example 2 — Compare with first element

```js
a.forEach((value, index, arr) => {
    if (value === arr[0]) {
        console.log(value, "is equal to the first element"); // arr[0] used for comparison
    }
});
```

---

### ✅ Example 3 — Print last element only

```js
a.forEach((value, index, arr) => {
    if (index === arr.length - 1) {
        console.log("Last element =", value); // arr.length used to detect last
    }
});
```

---

### ✅ Example 4 — Build a new array without first element

```js
let newArr = [];
a.forEach((value, index, arr) => {
    if (index > 0) newArr.push(arr[index]); // arr used to read other indices
});
console.log(newArr);
```

---

### ✅ Example 5 — Multiply each value by array size

```js
a.forEach((value, index, arr) => {
    arr[index] = value * arr.length; // arr.length affects calculation
});
console.log(a);
```

---

These are perfect for notes because they show **real use cases** of the `arr` parameter.
If you want, I can make a **PDF of all `array` methods with examples** too 📄🚀

*/

//for...in loop ;
// used to iterate over object ;
let obj = {
  name: "shravan",
  age: 22,
  city: "pune",
};
for (const key in obj) {
  if (Object.hasOwnProperty.call(obj, key)) {
    const element = obj[key];
    console.log(key, element);
  }
}
//for...of loop ;
// used to iterate over iterable objects like array , string ;
for (const value of a) {
  console.log(value);
}

let fruits = ["apple", "banana", "grapes"];       /*    [
                                                            0    "apple",
                                                            1    "banana",
                                                            2    "grapes"
                                                        ]
                                                  */                               
for (const [index, value] of fruits.entries()) {
  console.log(`index = ${index} value = ${value}`);
}



/*
`a.entries()` creates a **special iterator** that gives **[index, value] pairs** from the array.

---

### 🔍 Example

```js
let a = ["apple", "banana", "mango"];
console.log(a.entries());
```

This does **not show the values directly** — it returns an **iterator object**.

When we loop through it:

```js
for (const [index, value] of a.entries()) {
    console.log(index, value);
}
```

🔹 Output:

```
0 apple
1 banana
2 mango
```

---

### 🤔 Think of it like this

| Without `.entries()`        | With `.entries()`                           |
| --------------------------- | ------------------------------------------- |
| `for...of` gives only value | `for...of` gives index + value              |
| `for (const value of a)`    | `for (const [index, value] of a.entries())` |

---

### 🔥 Visual Understanding

`a.entries()` converts the array like this internally:

```
[
  [0, "apple"],
  [1, "banana"],
  [2, "mango"]
]
```

So `for...of` can read index AND value at the same time.

---

### 🧠 Summary for notes

```
a.entries() returns an iterator that provides [index, value] pairs
Use it when you want both index and value inside a for...of loop
```

---

If you want, I can list other useful array iterators:

* `a.keys()`
* `a.values()`
  Just tell me 👍
*/

