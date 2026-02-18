import { error } from "console";
import fs from "fs/promises";

let a = await fs.readFile("shravan.txt");
console.log("a :>> ", a.toString());
let b = await fs.writeFile("shravan.txt", "\t\t\t lorem10 ");
console.log(b);
let c = await fs.appendFile("shravan.txt", "utdfsd dbfuf df oefhdjbf", (e) => {
  if (e == null) {
    console.log("ok");
  } else {
    console.log("fuck");
  }
});
