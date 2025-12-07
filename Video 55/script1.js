
var a=5;
var a2=55;
var b=6; 
var name = "shravan"
console.log(a+b+1);
console.log(typeof(a),typeof(b))

a = a+1;

{
    var a2 =113;
    console.log(a2);
}
console.log(a2);
console.log("hi");


let x ="shravan bhsie"
let y = 22;
let z =3.23;
const p = true;

let q= undefined;
let r = null;

console.log(x,y,z,p,q,r)
console.log(typeof(x),typeof(y),typeof(z),typeof(p),typeof(q),typeof(r));
// null is a object;

console.log(null == undefined);
console.log(null === undefined);

let o = {
    "name" : "harry",
    "job code" : 453,
     "handsome" : "ture"
}
Object.freeze(o);

console.log(o);
o.name = "shravan";
console.log(o.name);