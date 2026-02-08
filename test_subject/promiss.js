let prom1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    let random = Math.random();
    if (random > 0.5) {
      resolve("shravan");
      setTimeout(() => {
        console.log("it's done SH ");
      }, 2000);
    } else {
      reject("fail");
    }
  });
});

let prom2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    let random = Math.random();
    if (random > 0.5) {
      resolve("aumlya");
      setTimeout(() => {
        console.log("it's done AM   ");
      }, 1000);
    } else {
      reject("fail");
    }
  });
});

// let ans = Promise.all([prom1, prom2]);
// ans
//   .then((a) => {
//     console.log(a);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

// let ans = Promise.allSettled([prom1, prom2]);
// ans
//   .then((a) => {
//     console.log(a);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

// let ans = Promise.allSettled([prom1, prom2]);
// ans
//   .then((a) => {
//     console.log(a);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

// let ans = Promise.any([prom1, prom2]);  // it only shos the outup of resovle promisses
// ans
//   .then((a) => {
//     console.log(a);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

// let ans = Promise.resolve([prom1, prom2]);
// ans
//   .then((a) => {
//     console.log(a);
//   })
//   .catch((err) => {
//     console.log(err);
//   });
 
let ans = Promise.reject([prom1, prom2]);
ans
  .then((a) => {
    console.log(a);
  })
  .catch((err) => {
    console.log(err); 
  });
