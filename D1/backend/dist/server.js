"use strict";

var express = require('express');
var _require = require('http'),
  get = _require.get;
var path = require('path');
var app = express();
var port = 3000;
app.use(express["static"](path.join(__dirname, "../public")));
app.post('/auth/signin', function (req, res) {
  var _req$body = req.body,
    email = _req$body.email,
    password = _req$body.password;
});
app.get("/api", function (req, res) {
  res.json({
    message: "Hello from Backend"
  });
});
app.get('/{*any}', function (req, res) {
  res.sendFile(path.resolve("public", "index.html"));
});
app.listen(port, function () {
  console.log("Server started on port");
});