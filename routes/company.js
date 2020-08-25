var express = require("express");
var router = express.Router();

router.get("/w_contract_write", function (req, res, next) {
  res.render("w_contract_write");
});

router.get("/w_contract_view", function (req, res, next) {
  res.render("w_solo_view");
});

router.get("/view_contract", function (req, res, next) {
  res.render("view_contract");
});

module.exports = router;
