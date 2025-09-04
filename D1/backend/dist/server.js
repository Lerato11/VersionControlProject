"use strict";

var express = require('express');
var _require = require('http'),
  get = _require.get;
var path = require('path');
var app = express();
var PORT = 3000;
app.use(express.json());
app.use(express["static"](path.join(__dirname, "../frontend/public")));
app.post('/auth/signin', function (req, res) {
  var _req$body = req.body,
    email = _req$body.email,
    password = _req$body.password;
  console.log("Sign in attempt:", email);

  // demo success
  res.json({
    success: true,
    message: "Signed in successfully (stub)",
    user: {
      id: 1,
      email: email
    },
    token: "sni@42sm$i*1" // for auth
  });
});
app.post("/auth/signup", function (req, res) {
  var _req$body2 = req.body,
    firstName = _req$body2.firstName,
    lastName = _req$body2.lastName,
    email = _req$body2.email,
    username = _req$body2.username,
    phoneNumber = _req$body2.phoneNumber,
    company = _req$body2.company,
    addressLine1 = _req$body2.addressLine1,
    addressLine2 = _req$body2.addressLine2,
    password = _req$body2.password;
  console.log("New user sign up:", req.body);

  // Respond with dummy user + fake token
  res.json({
    success: true,
    message: "User registered successfully",
    user: {
      id: 1,
      firstName: firstName,
      lastName: lastName,
      email: email,
      username: username,
      phoneNumber: phoneNumber,
      company: company,
      addressLine1: addressLine1,
      addressLine2: addressLine2
    },
    token: "cn3io4@m4!2*2"
  });
});
app.use(express["static"]("frontend/public"));
app.get("/api", function (req, res) {
  res.json({
    message: "Hello from Backend"
  });
});
app.get('/{*any}', function (req, res) {
  res.sendFile(path.resolve("frontend/public", "index.html"));
});
app.listen(PORT, function () {
  console.log("Server running on http://localhost:".concat(PORT));
});