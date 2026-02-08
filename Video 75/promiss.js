let prom1 = new Promise((resolve, reject) => {
  let randomNumber = Math.random();
  if (randomNumber > 0.5) {
    reject("Error: Random number is greater than 0.5");
  } else {
    setTimeout(() => {
      resolve("shravan ");
    }, 3000);
  }
});

let prom2 = new Promise((resolve, reject) => {
  let randomNumber = Math.random();
  if (randomNumber > 0.5) {
    reject("Error: Random number is greater than 0.5 2");
  } else {
    setTimeout(() => {
      resolve("shravan 2");
    }, 2000);
  }
});

// prom1
//   .then((message) => {
//     console.log(message);
//   })
//   .catch((error) => {
//     console.log("error is: " + error);
//   });

let p3 = Promise.any ([prom1, prom2]);
p3.then((a) => {
  console.log(a);
}).catch((e) => {
  console.log("error is : " + e);
});
