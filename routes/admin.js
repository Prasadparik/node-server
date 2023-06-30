const express = require("express");

const router = express.Router();

router.get("/add-product", (req, res, next) => {
  console.log("inside Add Product");
  res.send(
    '<form action="/admin/product" method="POST"> <input type="text" name="product-name"/> <input type="number" name="product-size"/> <button type="submit">Add</button> </form>'
  );
});

router.post("/product", (req, res, next) => {
  console.log(req.body);
  res.redirect("/");
});

module.exports = router;
