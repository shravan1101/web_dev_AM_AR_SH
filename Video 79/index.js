let a = prompt("Enter a number");
let b = prompt("Enter another number");

if (isNaN(a) || isNaN(b)) {
  throw SyntaxError("tuji gand number enter kar");
}
let sum = parseInt(a) + parseInt(b);
console.log(sum);

function main() {
  let x = 1;

  try {
    console.log("Sum is:", sum * x);
    return true; // variable x is not defined so it will go int catch block
  } catch (error) {
    console.log(error); // trow what type of error is present;
    console.log("seen hogaya ; ( ");
    alert(error.name);
    alert(error.message);
    alert(error.stack);
    return false; //
  } finally {
    // finaly help to bypass the return statement
    console.log("this will run anyway");
    // this will help in fuctions
    // while returing a value
  }
}

main();
