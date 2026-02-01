//faulkty calculator exersise 9 
function fault(a, b, c) {
    if (c == "+")
        return a - b;
    else if (c == "-")
        return a / b;
    else if (c == "*")
        return a + b;
    else if (c == "/")
        return a ** b;
    else if (c == "**")
        return a * b;
    else
        return null;

}

function calc(a, b, c) {
    if (c == "+")
        return a + b;
    else if (c == "-")
        return a - b;
    else if (c == "*")
        return a * b;
    else if (c == "/")
        return a / b;
    else if (c == "**")
        return a ** b;
    else
        return null;

}



console.log("enter the number");
let x = prompt("enter the first number ")
let z = prompt("enter the operation  ")
let y = prompt("enter the second number ")


let clc;
p = Math.random();
if (p < 0.1)
clc = fault(x, y, z);
else
clc = calc(x, y, z);
console.log("the answer is :",clc);