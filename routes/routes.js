const express = require("express");
const router = express.Router();
const path = require("path");

router.get("/", function (req, res) {
  res.sendFile(path.join(__dirname,"../views/index.html"))
});
router.get("/signup", function (req, res) {
  res.sendFile(path.join(__dirname,"../views/sign-up.html"))
});
router.get("/about", function (req, res) {
  res.sendFile(path.join(__dirname,"../views/about-us.html"))
});
router.get("/products", function (req, res) {
  res.sendFile(path.join(__dirname,"../views/products.html"))
});

module.exports = router;
