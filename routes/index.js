var express = require("express");
const { route } = require("./signin");
var router = express.Router();
var app = express();

router.get("/", function (req, res, next) {
  res.render("master_menu");
});

router.route("/login").get(function (req, res, next) {
  res.render("login");
});

router.route("/c_email").get(function (req, res, next) {
  res.render("c_email");
});

router.route("/sign_up").get(function (req, res, next) {
  res.render("sign_up");
});

router.route("/sign_up2").get(function (req, res, next) {
  res.render("sign_up2");
});

module.exports = router;
