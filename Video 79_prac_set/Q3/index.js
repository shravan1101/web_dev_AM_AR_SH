function promise() {
  return new Promise((reject) => {
    setTimeout(() => {
      reject("Promise rejected");
    }, 3000);
  });
}
// using aysic aw2qt fuctons

async function myFunction() {
  try {
    var result = await promise();
    console.log(result);
  } catch (error) {
    console.log(error);
  }
}
myFunction();
// work flow 
/*

Promise resolves → await → try block
Promise rejects  → await → catch block

*/