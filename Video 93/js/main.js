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

    fs.renameSync(`./${element}`, `./${name_file[1]}/${element}`);
  } catch {
    fs.mkdirSync(`./${name_file[1]}`);
    console.log("created a directory");

    fs.renameSync(`./${element}`, `./${name_file[1]}/${element}`);
  }

  //   try {
  //     await fns.access(`./${name_file[1]}`);
  //   } catch {
  //     await fns.mkdir(`./${name_file[1]}`);
  //     console.log("created a directory");
  //   }

  //   await fns.rename(`./${element}`, `./${name_file[1]}/${element}`);
}
