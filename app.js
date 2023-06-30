// building server ---------------------------------

const express = require("express");

const app = express();

app.use((req, res, next) => {
  console.log("inside middleware");
  next();
});

app.use((req, res, next) => {
  console.log("inside second middleware");
  res.send({ key1: "value" });
});

app.listen(3000);
