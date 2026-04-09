import fs from "fs";
import fns from "fs/promises";
let files = null;

// files= fs.readdir("./",(err,res)=>{
//      if(err)
//      {
//         console.log("can't read the dir")
//      }
//      else
//      {
//         return res
//      }
// })

files = fs.readdirSync("./");
// console.log(files);
for (let i = 0; i < files.length; i++) {
  const element = files[i];
  //   console.log(element);

  let name_file = element.split(".");
  console.log(name_file);

  try {
    fs.accessSync(`./${name_file[1]}`);
    fns.rename(`./${element}`, `./${name_file[1]}/${element}`);
  } catch {
    fs.mkdir(`${name_file[1]}`, () => {
      console.log("created a director");
    });
    fns.rename(`./${element}`, `./${name_file[1]}/${element}`);
  }
}
