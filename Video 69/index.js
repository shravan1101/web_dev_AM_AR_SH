let a = 6;

function factorial(number) {
  let arr = Array.from(Array(number + 1).keys());
  console.log(arr);
  let c = arr.slice(1).reduce((a, b) => {
    return a * b;
  });
  return c;
}

let fact = factorial(a);
console.log(fact);
