// const { get } = require("mongoose");

async function getdata() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("123");
    }, 2000);
  });
}

async function main() {
  console.log("step 1");

  console.log("data is fucking right now ");

  console.log("step 2");

  // let data = getdata();

  // data.then((data) => {
  //   console.log(data);
  //   console.log("step 2");
  // });

  let data = await getdata(); // but to use await , its should be rap inside a function with async keyword
  console.log(data);

  console.log("step 3");
}

main();
 