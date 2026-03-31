const express = require("express");
const app = express();
const port = 3000;

app.use(express.static("public"));

app.get("/", (req, res) => {
  console.log("this is  get request")
  res.send("Hello World!");
});

app.get("/hi", (req, res) => {
  res.send("lets go");
});

app.post("/hi", (req, res) => {
  console.log('post req ')
  res.send("this is a post request ");
});

app.put('/',(req,res =>{
  console.log("this is a put request")
  res.send("this is a put req")
}));

pp.put('/index',(req,res =>{
  console.log("this is a put request")
  res.send("this is a put req")
}));
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
