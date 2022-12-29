const express = require("express");
const app = express();
const port = process.env.PORT || 5000;

app.get("/", (req, res) => {
  res.send("Hellow World");
});

app.listen(port, () => {
  console.log("News Molecule is running on server: ", port);
});
