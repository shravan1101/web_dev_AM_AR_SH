const { error } = require("console");
const fs = require("fs");
// const fs_prormiss = require("fs/promises");

// console.log("strat");
// fs.writeFileSync("shravan.txt", "i am a good boy");
// console.log("ending");

console.log("start");
fs.writeFile("shravan.txt", "i am a good boy", () => {
  console.log("done");
  fs.readFile("shravan.txt", (error, data) => {
    console.log(error, data.toString());
  });
});

fs.appendFile("shravan.txt", "shravan is sad ", (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log("appended");
  }
});
console.log("end");
