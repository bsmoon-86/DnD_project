var express = require("express");
var router = express.Router();

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
  console.log(id);
  res.render("sign_up2");
});

app.post("/sign_up2", function (req, res) {
  const p_num = req.body.p_num;
  const name = req.body.name;
  const password = req.body.password;
  const division = req.body.division;
  console.log(id);
  console.log(password);
  console.log(name);
  console.log(division);
});
