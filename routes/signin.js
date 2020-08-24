var express = require("express");
var router = express.Router();

router.post("/", function (req, res, next) {
  const id = req.body.id;
  const pass = req.body.pass;

  if (id == "master@naver.com" && pass == "123") {
    console.log(id, pass);
    res.render("master_menu");
  } else if (id == "worker@naver.com" && pass == "123") {
    res.render("w_solo_view");
  } else {
    res.redirect("/");
  }
});

module.exports = router;
