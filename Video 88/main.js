const express = require("express");
const app = express();
const port = 3000;
//app.get or app.post or app.put or app.delete (path,handler)

app.use(express.static('public'))


app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/home", (req, res) => {
  res.send("Hello home!");
});

app.get("/about", (req, res) => {
  res.send("Hello about!");
});
app.get("/shravan", (req, res) => {
  res.send("Hello shravan");
});

app.get("/shravan/:slug", (req, res) => {
  console.log(req.params); //  params: [Object: null prototype] { slug: 'lol' },
  console.log(req.query); // 'mode=dark',
  res.send(`shravan ${req.params.slug}`);
});

// app.get("/shravan/:slug/:sec", (req, res) => {
//   res.send(`shravan ${req.params.slug}and ${req.params.sec}`);
// });
// app.get('/shravan/info', (req, res) => {
//   res.send('shravan info')
// })

// app.get('/shravan/info2', (req, res) => {
//   res.send('shravan info2')
// })

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
