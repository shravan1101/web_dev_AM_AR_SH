console.log("script loaded");
let boxes = document.getElementsByClassName("box");

console.log(boxes);
function getRamdomColor() {
    let val1 = Math.ceil(0+ Math.random() * (255 - 0));  // if you want a random number between 0 to 255
    let val2 = Math.ceil(0+ Math.random() * (255 - 0));  // a + random() * (b - a); 
    let val3 = Math.ceil(0+ Math.random() * (255 - 0));  // will give you random number between a to b
    return `rgb(${val1}, ${val2}, ${val3})`;
}


Array.from(boxes).forEach((e) => {
     e.style.backgroundColor = getRamdomColor();
     e.style.color = getRamdomColor();
    
});
