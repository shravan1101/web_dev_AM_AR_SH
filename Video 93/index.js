import fs from "fs";
import fsn from "fs/promises";
let base_path = "C:\\Users\\shrav\\Desktop\\web_AM_AR_SH\\Video 93";

let files = await fsn.readdir(base_path);
console.log(files);

for (const file_name of files) {
//   console.log(file_name);
  let ext = file_name.split(".");
//   console.log(ext);

}
