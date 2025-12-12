console.log(document.body);
console.log(document.body.childNodes);

let cont = document.body.childNodes[3];
console.log(cont);

console.log(cont.childNodes);

let divs = cont.childNodes;
console.log(divs);


// childeNodes 
// document.body.childNodes
// NodeList(11) [text, div.container, text, table, text, script, text, comment, text, script, text]