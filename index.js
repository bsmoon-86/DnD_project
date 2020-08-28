var http = require("http");
var express = require("express");
var app = express();
var server = http.createServer(app);
var port = 3333;
var path = require("path");
// var session = require("express-session");
// var mysql = require("mysql2");
// var connection = mysql.createConnection({
//   host: "192.168.0.5",
//   port: 3306, // db 포트
//   user: "block", // user 이름
//   password: "block1234!@", // 비밀번호
//   database: "DND", // database 이름
//   //table명 소문자 jhj
// });

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));

var indexRouter = require("./routes/index");
var signinRouter = require("./routes/signin");
var companyRouter = require("./routes/company");
var nodemailer = require('nodemailer');
var smtpTransport = require('nodemailer-smtp-transport');

app.use("/", indexRouter);

app.use("/signin", signinRouter);

app.use("/", companyRouter);

app.post("/action1", function (req, res, next) {
  const id = req.body.id;
  const pass = req.body.pass;
  const name = req.body.name;
  const phone = req.body.phone;
  const addr = req.body.addr;
  const linkcode = 2;
  const birth = req.body.birth;

  res.render("sign_up");

  // connection.query(`select id from jhj where id=?`, [id], function (
  //   err,
  //   users
  // ) {
  //   if (err) {
  //     res.render("sign_up", {
  //       errormessage: "오류 발생",
  //       // user: req.session.loggedIn,
  //     });
  //   } else if (users.length > 0) {
  //     res.render("sign_up", {
  //       errormessage: "이미 존재하는 이메일",
  //       // user: req.session.loggedIn,
  //     });
  //   } else {
  //     console.log(id);
  //     console.log(pass);
  //     console.log(name);
  //     console.log(phone);
  //     console.log(addr);
  //     console.log(linkcode);
  //     console.log(birth);

  //     connection.query(
  //       `insert into jhj (id, pass, name, phone, addr, linkcode, birth)  
  //                   values (?, ?, ?, ?, ?, ?, ?)`,
  //       [id, pass, name, phone, addr, linkcode, birth],
  //       function (err2, result) {
  //         if (err2) {
  //           res.render("sign_up", {
  //             errormessage: "생성 오류",
  //             // user: req.session.loggedIn,
  //           });
  //         } else {
  //           console.log("생성완료");
  //           res.redirect("/");
  //         }
  //       }
  //     );
  //   }
  // });
});

app.post("/action2", function (req, res, next) {
  const p_num = req.body.p_num;
  const id = req.body.id;
  const pass = req.body.pass;
  const name = req.body.name;
  const phone = req.body.phone;
  const linkcode = 0;
  const ceo = req.body.ceo;
  const addr = req.body.addr;
  const ceo_phone = req.body.ceo_phone;

  res.render("sign_up2");

  // connection.query(`select id from jhj where id=?`, [id], function (
  //   err,
  //   users
  // ) {
  //   if (err) {
  //     res.render("sign_up2", {
  //       errormessage: "오류 발생",
  //       // user: req.session.loggedIn,
  //     });
  //   } else if (users.length > 0) {
  //     res.render("sign_up2", {
  //       errormessage: "이미 존재하는 이메일",
  //       // user: req.session.loggedIn,
  //     });
  //   } else {
  //     console.log(p_num);
  //     console.log(id);
  //     console.log(pass);
  //     console.log(name);
  //     console.log(phone);
  //     console.log(linkcode);
  //     console.log(ceo);
  //     console.log(addr);
  //     console.log(ceo_phone);

  //     connection.query(
  //       `insert into jhj (p_num, id, pass, name, linkcode, phone, ceo, addr, ceo_phone)  
  //                   values (?, ?, ?, ?, ?, ?, ?, ?, ?)`,
  //       [p_num, id, pass, name, linkcode, phone, ceo, addr, ceo_phone],
  //       function (err2, result) {
  //         if (err2) {
  //           console.log(err2);
  //           res.render("sign_up2", {
  //             errormessage: "생성 오류",
  //             // user: req.session.loggedIn,
  //           });
  //         } else {
  //           console.log("생성완료");
  //           res.redirect("/");
  //         }
  //       }
  //     );
  //   }
  // });
});
app.post("/c_email", function(req, res, next){
  const email = req.body.w_email;
  console.log(email);
  var arr = "0,1,2,3,4,5,6,7,8,9,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,A,B,C,D,E,F,G,H,I,J,K,L,M,N,O,P,Q,R,S,T,U,V,W,X,Y,Z,;".split(",");
var randomPw = createCode(arr, 10);
console.log(randomPw)

function createCode(objArr, iLength) {
  var arr = objArr;
  var randomStr = "";
  for (var j=0; j<iLength; j++) {
  randomStr += arr[Math.floor(Math.random()*arr.length)];
  }
  return randomStr
  }

    var transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: 'keafz0829@gmail.com',
        pass: 'c4iuser1!'
      }
    });
    
    var mailOptions = {
      from: 'keafz0829@gmail.com',
      to: email,
      subject: 'DND에서 새로운 인증코드를 보내드립니다.',
      text: 'DND에서 새로운 인증코드를 보내드립니다\n' + randomPw + '\n안녕히계세요'
    };
    
    transporter.sendMail(mailOptions, function(error, info){
      if (error) {
        console.log(error);
      } else {
        console.log('Email sent: ' + info.response);
      }
    });
  

})

server.listen(port, function () {
  console.log("웹 서버 시작", port);
});
