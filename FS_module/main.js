import fs from "fs";
// sysc..
fs.writeFileSync("./shravan.txt", "hi this file ");

// aysc
// fs.writeFile("./lol.txt", "this is gandtuji ", (err) => {
//   console.log(err);
// });

// const res = fs.readFileSync("./contact.txt", "utf-8");
// console.log(res);

// fs.readFile("./contact.txt", "utf-8", (err, result) => {
//   if (err) {
//     console.log("error", err);
//   } else {
//     console.log(result);
//   }
// });

fs.appendFileSync("./contact.txt", "this is a data");
fs.cpSync("./contact.txt", "./copy.txt");

// fs.unlinkSync("./copy.txt");

console.log(fs.statSync("./contact.txt"));
