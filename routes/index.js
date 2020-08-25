var express = require("express");
var router = express.Router();
var app = express();

router.get("/", function (req, res, next) {
  res.render("login");
});

router.route("/").get(function (req, res, next) {
  res.render("login");
});

router.route("/sign_up").get(function (req, res, next) {
  res.render("sign_up");
});

router.route("/sign_up2").get(function (req, res, next) {
  res.render("sign_up2");
});

module.exports = router;
