const express = require("express");
const app = express();
const port = 3000;

app.set("view engine", "ejs"); // there are more pug , handlebar

app.get("/", (req, res) => {
  let sitename = "framwork";
  let searchText = "seach Now";
  let arr = ["shravan", 54, 65];
  //   res.sendFile("templates/index.html", { root: __dirname });
  res.render("index", { sitename: sitename, searchText: searchText, arr });
});

app.get("/blog/:slug", (req, res) => {
  let blogTitle = "why it frame work";
  let blogContent = "search Now";
  //   res.sendFile("templates/blogpost,html", { root: __dirname });
  res.render("blogpost", { blogTitle: blogTitle, blogContent: blogContent });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
