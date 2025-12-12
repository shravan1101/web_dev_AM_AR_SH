document.title = "Video 66"; // Set the document title;

document.p = "hi";
/* Here are **perfect notebook-friendly notes on DOM (Document Object Model)** — simple and complete 👇
You can copy-paste directly.

---

## 📌 **Document Object Model (DOM) — Notes**

### 🔹 Definition

DOM (Document Object Model) is a **tree-like structure** created by the web browser for every webpage.
It represents the webpage so that **JavaScript can access and control HTML elements**.

---

### 🔹 Key Points

* DOM converts HTML into **objects/nodes**
* JavaScript can **read, change, add, or delete** elements using DOM
* DOM makes the webpage **dynamic and interactive**

---

### 🔹 DOM Structure (Tree)

```
Document
 └── html
      ├── head
      └── body
           ├── h1
           ├── p
           └── div
```

---

### 🔹 Types of Nodes

| Node Type      | Example                 |
| -------------- | ----------------------- |
| Document Node  | `document` (whole page) |
| Element Node   | `<p>`, `<h1>`, `<div>`  |
| Text Node      | Text inside tags        |
| Attribute Node | `id`, `class`           |

---

### 🔹 Common DOM Methods (Important)

| Method                              | Use                                |
| ----------------------------------- | ---------------------------------- |
| `document.getElementById()`         | Select element by ID               |
| `document.getElementsByClassName()` | Select elements by class           |
| `document.getElementsByTagName()`   | Select elements by tag             |
| `document.querySelector()`          | Select first matching CSS selector |
| `document.querySelectorAll()`       | Select all matching CSS selectors  |

---

### 🔹 Common DOM Properties

| Property     | Use                 |
| ------------ | ------------------- |
| `.innerHTML` | Change HTML content |
| `.innerText` | Change only text    |
| `.style`     | Change CSS style    |
| `.value`     | Get input value     |

---

### 🔹 Example (Simple)

#### HTML:

```html
<p id="text">Hello world</p>
```

#### JavaScript:

```js
document.getElementById("text").innerHTML = "Hello Shravan!";
```

---

### 🔹 What DOM allows JavaScript to do

✔ Change content
✔ Change CSS style
✔ Add/Remove HTML elements
✔ Respond to events (clicks, input, keys etc.)

---

### 🧠 In one sentence

> DOM is the **interface** that allows **JavaScript to control the webpage.**

---

If you want, I can also give **practice questions** + **mini DOM project** for your revision and learning 🚀
*/

console.log(document.title);
console.log(document.body);
document.body.style.backgroundColor = "lightblue";
