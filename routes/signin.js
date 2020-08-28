var express = require("express");
const { Connection } = require("mysql2");
var router = express.Router();
// var mysql = require("mysql2");
// var connection = mysql.createConnection({
//   host: "192.168.0.5",
//   port: 3306, // db 포트
//   user: "block", // user 이름
//   password: "block1234!@", // 비밀번호
//   database: "DND", // database 이름
//   //table명 소문자 jhj
// });

router.post("/", function (req, res, next) {
  const id = req.body.id;
  const pass = req.body.pass;

  if (id == "master@naver.com"){
    res.render("master_menu")
  }else{
    res.render("w_solo_view");
  }

  // connection.query(
  //   "select linkcode from jhj WHERE id=? and pass=?",
  //   [id, pass],
  //   function (err, users) {
  //     if (err) {
  //       console.log(err); // 오류
  //       res.render("error");
  //     } else if (users.length > 0) {
  //       if (users[0].linkcode == 0) {
  //         console.log(id, pass);
  //         res.render("master_menu");
  //       } else if (users[0].linkcode == "2") {
  //         console.log(id, pass);
  //         res.render("w_solo_view");
  //       }
  //     } else {
  //       res.redirect("/");
  //     }
  //   }
  // );
});

module.exports = router;
