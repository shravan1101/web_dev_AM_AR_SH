function savetoLocalStorage(note) {
  localStorage.setItem("note", note);
}
let note = localStorage.getItem("note");

if (note) {
  document.querySelector(".note").innerHTML = note;
}

document.querySelector("button").addEventListener("click", function () {
  let note = prompt("Enter your note:");
  savetoLocalStorage(note);
  document.querySelector(".note").innerHTML = note;
});

/* 
### Local Storage – Short Note with Examples

**Local Storage** is used to store data in the browser as **key–value pairs**.
Data **remains even after page refresh or browser close**.

---

### Example 1: Store and get a value      */
