const express = require("express");
const app = express();
const port = 8080;

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/api/test", (req, res) => {
  res.send("test");
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
