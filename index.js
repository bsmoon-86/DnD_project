var http = require("http");
var express = require("express");
var app = express();
var server = http.createServer(app);
var port = 3333;
var path = require("path");
// var session = require("express-session");

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));


var indexRouter = require("./routes/index");
app.use("/", indexRouter);

var indexRouter = require("./routes/index");
app.use("/sign_up", indexRouter);

var indexRouter = require("./routes/index");
app.use("/sign_up2", indexRouter);

server.listen(port, function () {
  console.log("웹 서버 시작", port);
});
