const express = require("express");
const app = express();
const port = 3000;

// Custom function
function nextFunction() {
  console.log("this is next function");
}

// Serve static files // take the file from the public folder 

app.use(express.static("public"));

// Middleware 1
app.use((req, res, next) => {
  console.log("middleware 1");
  next(); // important to pass control it give control next middleware
});

app.use((req, res, next) => {
  console.log("middleware 2");
  console.log(req.header);
  req.shravan = " i did a mistake";
  console.log("hi");
  next();
});

// Route
app.get("/", (req, res) => {
  res.send(" look what you did " + req.shravan);
});

// Start server
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
