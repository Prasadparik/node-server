// building server ---------------------------------

const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));

app.use("/add-product", (req, res, next) => {
  console.log("inside Add Product");
  res.send(
    '<form action="/product" method="POST"> <input type="text" name="product-name"/> <input type="number" name="product-size"/> <button type="submit">Add</button> </form>'
  );
});

app.post("/product", (req, res, next) => {
  console.log(req.body);
  res.redirect("/");
});

app.use("/", (req, res, next) => {
  console.log("Hi There!");
  res.send("<h1>Hi There!</h1>");
});

app.listen(3000);
