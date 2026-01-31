// function getdata() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve("pass");
//     }, 35000);
//   });
// }

// console.log("lodind modlue");
// console.log("getting data ");

// let data = getdata();

// console.log(data);
// console.log("proccess data");
// console.log("rask");  // you have to wait for the data

// the promisee then methode to wait for the data
// function getdata() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve("pass");
//     }, 35000);
//   });
// }
// console.log("lodind modlue");
// console.log("getting data ");

// let data = getdata();

// data.then(() => {
//   console.log(data);
//   console.log("proccess data");
//   console.log("rask");
// });

// aysci methode to wait for the data

async function getdata() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("pass");
    }, 35000);
  });
}

async function main() {
  console.log("lodind modlue");
  console.log("getting data ");

  let data = await getdata();
  console.log(data);
  console.log("proccess data");
  console.log("rask");
}
main(); xzSAD
