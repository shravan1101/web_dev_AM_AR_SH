let random = Math.random();

let a = prompt("enter a frist number");
let b = prompt("enter a  operations"); // operations are + - * /
let c = prompt("enter a secoud number");

let obj = {
    "+" : "-",
    "-" : "+",
    "*" : "/",
    "/" : "*",
}

if(random > 0.1){
    alert(`the result is ${eval(`${a}${b}${c}`)}`);
}

else{
    b=obj[b]
    alert(`the result is ${calculate(a,b,c)}`);
}