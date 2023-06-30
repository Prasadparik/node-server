const express = require("express");

const router = express.Router();

router.get("/", (req, res, next) => {
  console.log("Hi There!");
  res.send("<h1>Hi There!</h1>");
});

module.exports = router;
