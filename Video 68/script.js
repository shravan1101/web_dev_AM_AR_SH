const e = require("express");

document.querySelector("box");

// dom searching method to select elements by class name
let shravan = document.getElementsByClassName("box");
console.log(shravan);

shravan[2].style.backgroundColor = "red";
document.getElementById("red").style.color = "blue";

// qyuerySelectorAll
document.querySelector(".box").style.backgroundColor = "pink"; // it match only first one

console.log(document.querySelectorAll(".box")); // nodelist of all the elements

// this wile works
let collection = document.querySelectorAll(".box");
for (let i = 0; i < collection.length; i++) {
  collection[i].style.backgroundColor = "yellow";
}
//another way using for..of loop
document.querySelectorAll(".box").forEach((e) => {
  e.style.backgroundColor = "green";
});


// getElementsByTagName
console.log(document.getElementsByTagName("div"));

// matches , closet and contains
let e = document.getElementsByClassName("box");
console.log(e[2].matches("#red"));

//closet    

