if (localStorage.getItem("name")) {
  a = localStorage.getItem("name");
  document.write("welecoem " + a);
} else {
  let a = prompt("Enter your name");
  localStorage.setItem("name", a);
  document.write("welecoem " + a);
}
/* > a = {
    "shravan" : 1 , "amulua" : 2
  }

{shravan: 1, amulua: 2}

> JSON.stringify(a)
'{"shravan":1,"amulua":2}'

> localStorage.setItem("guys", a)
undefined

> localStorage.getItem("guys")
'[object Object]'

> localStorage.setItem("guys", JSON.stringify(a))
undefined

> localStorage.getItem("guys")
'{"shravan":1,"amulua":2}'
 */

/* 
### Local Storage – Short Note with Examples

**Local Storage** is used to store data in the browser as **key–value pairs**.
Data **remains even after page refresh or browser close**.

---

### Example 1: Store and get a value

```javascript
localStorage.setItem("name", "Amit");
let name = localStorage.getItem("name");
```

---

### Example 2: Store an object

```javascript
let user = { name: "Amit", age: 20 };
localStorage.setItem("user", JSON.stringify(user));
```

### Retrieve the object

```javascript
let data = JSON.parse(localStorage.getItem("user"));
```

---

### Example 3: Remove data

```javascript
localStorage.removeItem("name");
```

---

### Example 4: Clear all data

```javascript
localStorage.clear();
```

---

### Note:

* Stores **only strings**
* Objects/arrays need **JSON.stringify()**
* Not secure (visible in DevTools)
* Used for settings, form data, cart items

If you want it **even shorter (2–3 lines)** or **exam-style answer**, tell me 👍
*/