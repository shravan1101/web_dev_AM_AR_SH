async function getdata() {
  // simulating geting data from an API
  let x = await fetch("https://jsonplaceholder.typicode.com/todos/1");
  // .then((response) => response.json())
  // .then((json) => console.log(json)); // we have to convert this to aync await style
  data = await x.json();
  //   daat2 = await x.text();
  console.log(data);
  //   console.log(daat2);
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

// Async function: always returns a Promise
async function getData() {
  // Send a POST request to the server
  // fetch() returns a Promise (response will come later)
  const response = await fetch("https://jsonplaceholder.typicode.com/posts", {
    // HTTP method: POST (used to send data)
    method: "POST",

    // Data we want to send to the server
    // JavaScript object → converted to JSON string
    body: JSON.stringify({
      title: "foo",
      body: "bar",
      userId: 1,
    }),

    // Headers tell the server what type of data we are sending
    headers: {
      "Content-Type": "application/json; charset=UTF-8",
    },
  });

  // Convert the server response to a JavaScript object
  const data = await response.json();

  // Return the final data
  // Because this is an async function,
  // this actually returns Promise.resolve(data)
  return data;
}
getdata()
  .then((data) => console.log(data))
  .catch((err) => console.log(err));

main();
