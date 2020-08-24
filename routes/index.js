var express = require("express");
var router = express.Router();
var app = express();

module.exports = router.get("/", function (req, res, next) {
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

router.route("/signin").post(function (req, res, next) {
  const id = req.body.id;
  const pass = req.body.pass;

  if (id == "master@naver.com" && pass == "123") {
    console.log(id, pass);
    res.render("master_menu");
  } else if (id == "worker@naver.com" && pass == "123") {
    res.render("w_solo_view");
  } else {
    res.render("login");
  }
});
