// console.log("This is Video 75");
// console.log("Learning about Module Bundlers and Build Tools.");
// setTimeout(() => {
//   console.log("set timeout 1 .");
// }, 3000);
// console.log("End of Video 75 script.");
const fn = (arg) => {
  console.log("Function called with argument:", arg);
};

const callback = (arg) => {
  console.log("Callback called with argument:", arg);
  fn(arg);
};

const loadscript = (src, callback) => {
  let sc = document.createElement("script");
  sc.src = src;

  sc.onload = () => {
    callback("harry");
  };

  document.head.appendChild(sc);
};

loadscript(
  "https://cdnjs.cloudflare.com/ajax/libs/lodash.js/4.17.21/lodash.min.js",
  callback
);
