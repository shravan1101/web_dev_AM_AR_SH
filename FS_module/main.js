import fs from "fs";
// sysc..
fs.writeFileSync("./shravan.txt", "hi this file ");

// aysc
// fs.writeFile("./lol.txt", "this is gandtuji ", (err) => {
//   console.log(err);
// });

const res = fs.readFileSync("./contact.txt", "utf-8");
console.log(res);
