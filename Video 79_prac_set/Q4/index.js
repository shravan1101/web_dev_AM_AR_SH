function p1() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Promise 1 resolved");
    }, 2000);
  });
}
function p2() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Promise 1 resolved");
    }, 2000);
  });
}
function p3() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Promise 1 resolved");
    }, 2000);
  });
}
// all promises run in parallel
async function main() {
  console.time("promise all");
  const res = await Promise.all([p1(), p2(), p3()]);
  console.log(res);
  console.timeEnd("promise all");
}

main();

async function main2() {
  console.time("promise all ");
  const r1 = await p1();
  const r2 = await p2();
  const r3 = await p3();
  console.log([r1, r2, r3]);
  console.timeEnd("promise all ");
}

main2();
