console.log("THIS iis a string tu");
let name ="shravan";

console.log(name[1]);
console.log(name[2]);
console.log(name[3]);
console.log(name[4]);
console.log(name[5]);
let name1="bhise";

console.log(name+name1);// used to make a template

console.log(` is name = ${name} and surname = ${name1} `);

//

let b = "aquaiens";
console.log(b.toUpperCase());
console.log(b.toLowerCase());
console.log(b.length);
console.log(b.slice(1,5));
console.log(b.slice(4));
console.log(b.replace("a","12")); // it will replace only first a
console.log(b);
console.log(b.concat(b , "shravan" ,"is good boy"));
console.log(b);

console.log(b.trim());// it will remove spaces from starting and ending of string
let c = "    aquaiens    ";
console.log(c.trim()); 
// let e="shracb+sdsd+sds+d" ;
// console.log(e.trim(+));
// you cannot use trim with any other character except space ;
let e="shravxn+bhise+is+good+boy" ;
console.log(e.replace("+"," "));// it will replace only first + with space
// you what slipt your sring based on any character ;
// use the following code ;
console.log(e.split("+"));// it will convert string into array based on the separator you have given ;

// search in string ;
let f = "shravan bhise";
console.log(f.indexOf("h"));// it will give the index of first occurance of h ;