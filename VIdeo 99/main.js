const express = require("express");
const app = express();
const port = 3000;
const mongoose = require("mongoose");
mongoose.connect("mongodb://127.0.0.1:27017/test/company");
const Employee = require("./models/employee");

app.set("view engine", "ejs");

app.get("/", (req, res) => {
  //   res.send('Hello World!')
  res.render("index", { foo: "FOO" });
});

app.get("/genrate", async (req, res) => {
  // genrate random data
  for (let index = 0; index < 10; index++) {
    let e = await Employee.create({
      name: "shravan",
      salary: 4500,
      language: "python",
      city: "new work",
      isManager: true,
    });
    console.log(e);
    

    res.render("index", { foo: "FOO" });
  }
  res.render("index");
});
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
