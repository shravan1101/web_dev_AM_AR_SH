console.log(" functions");

let a =1;
console.log(a);
console.log(a+1);
console.log(a+2);
// standed for  loop 
for (let i = 1; i <= 100; i++) {
    console.log(i);
    i++;
    
}


// forin loop 
let obj = { 
    name : "shravan",
    role : "programming",
    copany : "printerji"
}
for (const key in obj) {
    
    const element = obj[key];
    console.log(key,element);
}

// for of loop 

let name ="shrvan ,bhsie , amulay";
for (const val of name) {
    console.log(val);
}

for (const element in obj) {
    console.log(element);
}

for (const element of "shravan") {
    console.log(element);
}

// to iterate the objects key and value


for (const key in obj) {
    if (!Object.hasOwn(obj, key)) continue;
    
    const element = obj[key];
    console.log(key,obj[key])
    
}

while (i<100) {
    console.log(i);
    i++;
}
let i =0;
do{
    console.log(i);
    i++;

}while(i<6);