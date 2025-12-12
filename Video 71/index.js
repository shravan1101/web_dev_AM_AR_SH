const { set } = require("mongoose");

document.querySelector(".box").innerHTML;
// 'Lorem ipsum dolor sit...' // it gives the inner html of the first matched element

document.querySelector(".box").innerText;

let div = document.createElement("div");
div.innerHTML = "nischay chi gand <b> 40rs </b> ";
div.setAttribute("class", "box");
document.querySelector(".in").append(div);
