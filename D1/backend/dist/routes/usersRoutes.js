"use strict";

function _regenerator() { /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */ var e, t, r = "function" == typeof Symbol ? Symbol : {}, n = r.iterator || "@@iterator", o = r.toStringTag || "@@toStringTag"; function i(r, n, o, i) { var c = n && n.prototype instanceof Generator ? n : Generator, u = Object.create(c.prototype); return _regeneratorDefine2(u, "_invoke", function (r, n, o) { var i, c, u, f = 0, p = o || [], y = !1, G = { p: 0, n: 0, v: e, a: d, f: d.bind(e, 4), d: function d(t, r) { return i = t, c = 0, u = e, G.n = r, a; } }; function d(r, n) { for (c = r, u = n, t = 0; !y && f && !o && t < p.length; t++) { var o, i = p[t], d = G.p, l = i[2]; r > 3 ? (o = l === n) && (u = i[(c = i[4]) ? 5 : (c = 3, 3)], i[4] = i[5] = e) : i[0] <= d && ((o = r < 2 && d < i[1]) ? (c = 0, G.v = n, G.n = i[1]) : d < l && (o = r < 3 || i[0] > n || n > l) && (i[4] = r, i[5] = n, G.n = l, c = 0)); } if (o || r > 1) return a; throw y = !0, n; } return function (o, p, l) { if (f > 1) throw TypeError("Generator is already running"); for (y && 1 === p && d(p, l), c = p, u = l; (t = c < 2 ? e : u) || !y;) { i || (c ? c < 3 ? (c > 1 && (G.n = -1), d(c, u)) : G.n = u : G.v = u); try { if (f = 2, i) { if (c || (o = "next"), t = i[o]) { if (!(t = t.call(i, u))) throw TypeError("iterator result is not an object"); if (!t.done) return t; u = t.value, c < 2 && (c = 0); } else 1 === c && (t = i["return"]) && t.call(i), c < 2 && (u = TypeError("The iterator does not provide a '" + o + "' method"), c = 1); i = e; } else if ((t = (y = G.n < 0) ? u : r.call(n, G)) !== a) break; } catch (t) { i = e, c = 1, u = t; } finally { f = 1; } } return { value: t, done: y }; }; }(r, o, i), !0), u; } var a = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} t = Object.getPrototypeOf; var c = [][n] ? t(t([][n]())) : (_regeneratorDefine2(t = {}, n, function () { return this; }), t), u = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(c); function f(e) { return Object.setPrototypeOf ? Object.setPrototypeOf(e, GeneratorFunctionPrototype) : (e.__proto__ = GeneratorFunctionPrototype, _regeneratorDefine2(e, o, "GeneratorFunction")), e.prototype = Object.create(u), e; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, _regeneratorDefine2(u, "constructor", GeneratorFunctionPrototype), _regeneratorDefine2(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = "GeneratorFunction", _regeneratorDefine2(GeneratorFunctionPrototype, o, "GeneratorFunction"), _regeneratorDefine2(u), _regeneratorDefine2(u, o, "Generator"), _regeneratorDefine2(u, n, function () { return this; }), _regeneratorDefine2(u, "toString", function () { return "[object Generator]"; }), (_regenerator = function _regenerator() { return { w: i, m: f }; })(); }
function _regeneratorDefine2(e, r, n, t) { var i = Object.defineProperty; try { i({}, "", {}); } catch (e) { i = 0; } _regeneratorDefine2 = function _regeneratorDefine(e, r, n, t) { function o(r, n) { _regeneratorDefine2(e, r, function (e) { return this._invoke(r, n, e); }); } r ? i ? i(e, r, { value: n, enumerable: !t, configurable: !t, writable: !t }) : e[r] = n : (o("next", 0), o("throw", 1), o("return", 2)); }, _regeneratorDefine2(e, r, n, t); }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }
var express = require("express");
var _require = require("../models/usersModel"),
  getUsers = _require.getUsers,
  getUserFriends = _require.getUserFriends,
  getUserById = _require.getUserById,
  updateUserProfile = _require.updateUserProfile,
  sendFriendRequest = _require.sendFriendRequest,
  acceptFriendRequest = _require.acceptFriendRequest,
  rejectFriendRequest = _require.rejectFriendRequest,
  addUserProject = _require.addUserProject,
  updateUserImage = _require.updateUserImage,
  removeUser = _require.removeUser,
  removeFriend = _require.removeFriend;
var router = express.Router();
var _require2 = require("../utils/fileUploads"),
  uploadImage = _require2.uploadImage;

// get all users
router.get("/", /*#__PURE__*/function () {
  var _ref = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee(req, res) {
    var users, _t;
    return _regenerator().w(function (_context) {
      while (1) switch (_context.p = _context.n) {
        case 0:
          _context.p = 0;
          _context.n = 1;
          return getUsers(req.body);
        case 1:
          users = _context.v;
          res.json(users);
          _context.n = 3;
          break;
        case 2:
          _context.p = 2;
          _t = _context.v;
          res.status(500).json({
            error: _t.message
          });
        case 3:
          return _context.a(2);
      }
    }, _callee, null, [[0, 2]]);
  }));
  return function (_x, _x2) {
    return _ref.apply(this, arguments);
  };
}());

// get friends of user
router.get("/friends", /*#__PURE__*/function () {
  var _ref2 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee2(req, res) {
    var userId, user, friends, _t2;
    return _regenerator().w(function (_context2) {
      while (1) switch (_context2.p = _context2.n) {
        case 0:
          userId = parseInt(req.query.userId);
          _context2.p = 1;
          _context2.n = 2;
          return getUserById(userId);
        case 2:
          user = _context2.v;
          if (!(!user || isNaN(userId))) {
            _context2.n = 3;
            break;
          }
          return _context2.a(2, res.status(401).json({
            success: false,
            message: "Invalid or Missing userId"
          }));
        case 3:
          _context2.n = 4;
          return getUserFriends(userId);
        case 4:
          friends = _context2.v;
          res.json({
            success: true,
            friends: friends
          });
          _context2.n = 6;
          break;
        case 5:
          _context2.p = 5;
          _t2 = _context2.v;
          res.status(500).json({
            error: _t2.message
          });
        case 6:
          return _context2.a(2);
      }
    }, _callee2, null, [[1, 5]]);
  }));
  return function (_x3, _x4) {
    return _ref2.apply(this, arguments);
  };
}());

// get user by id
router.get("/:id", /*#__PURE__*/function () {
  var _ref3 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee3(req, res) {
    var id, user, _t3;
    return _regenerator().w(function (_context3) {
      while (1) switch (_context3.p = _context3.n) {
        case 0:
          _context3.p = 0;
          // get id from local storage
          id = req.params.id; // for testing
          _context3.n = 1;
          return getUserById(Number(id));
        case 1:
          user = _context3.v;
          if (user) {
            _context3.n = 2;
            break;
          }
          return _context3.a(2, res.status(401).json({
            success: false,
            message: "Invalid Userssssss Id"
          }));
        case 2:
          res.json({
            success: true,
            message: "Retrieved User successfully",
            user: user
          });
          _context3.n = 4;
          break;
        case 3:
          _context3.p = 3;
          _t3 = _context3.v;
          res.status(500).json({
            error: _t3.message
          });
        case 4:
          return _context3.a(2);
      }
    }, _callee3, null, [[0, 3]]);
  }));
  return function (_x5, _x6) {
    return _ref3.apply(this, arguments);
  };
}());

// edit user
// update user
router.put("/", /*#__PURE__*/function () {
  var _ref4 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee4(req, res) {
    var _req$body, idNum, updates, user, _t4;
    return _regenerator().w(function (_context4) {
      while (1) switch (_context4.p = _context4.n) {
        case 0:
          _req$body = req.body, idNum = _req$body.idNum, updates = _req$body.updates;
          _context4.p = 1;
          _context4.n = 2;
          return updateUserProfile(idNum, updates);
        case 2:
          user = _context4.v;
          if (!(!user || user.id != idNum)) {
            _context4.n = 3;
            break;
          }
          return _context4.a(2, res.status(401).json({
            success: false,
            message: "Invalid User Id"
          }));
        case 3:
          res.json({
            success: true,
            message: "Profile Updated Successfully",
            user: user
          });
          _context4.n = 5;
          break;
        case 4:
          _context4.p = 4;
          _t4 = _context4.v;
          res.status(500).json({
            error: _t4.message
          });
        case 5:
          return _context4.a(2);
      }
    }, _callee4, null, [[1, 4]]);
  }));
  return function (_x7, _x8) {
    return _ref4.apply(this, arguments);
  };
}());
router.get("/friendRequests/:id", /*#__PURE__*/function () {
  var _ref5 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee5(req, res) {
    var userId, user, requests, _t5;
    return _regenerator().w(function (_context5) {
      while (1) switch (_context5.p = _context5.n) {
        case 0:
          userId = parseInt(req.params.id);
          _context5.p = 1;
          _context5.n = 2;
          return getUserById(userId);
        case 2:
          user = _context5.v;
          if (user) {
            _context5.n = 3;
            break;
          }
          return _context5.a(2, res.status(401).json({
            success: false,
            message: "Invalid User ID"
          }));
        case 3:
          requests = user.requests || [];
          res.json({
            success: true,
            requests: requests
          });
          _context5.n = 5;
          break;
        case 4:
          _context5.p = 4;
          _t5 = _context5.v;
          res.status(500).json({
            success: false,
            message: _t5.message
          });
        case 5:
          return _context5.a(2);
      }
    }, _callee5, null, [[1, 4]]);
  }));
  return function (_x9, _x0) {
    return _ref5.apply(this, arguments);
  };
}());

// send friend request : 

router.post("/sendFriendReq/:id", /*#__PURE__*/function () {
  var _ref6 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee6(req, res) {
    var receiverId, senderId, sender, receiver, friendReq, _t6;
    return _regenerator().w(function (_context6) {
      while (1) switch (_context6.p = _context6.n) {
        case 0:
          receiverId = parseInt(req.params.id);
          senderId = req.body.senderId;
          _context6.p = 1;
          _context6.n = 2;
          return getUserById(senderId);
        case 2:
          sender = _context6.v;
          _context6.n = 3;
          return getUserById(receiverId);
        case 3:
          receiver = _context6.v;
          if (sender) {
            _context6.n = 4;
            break;
          }
          return _context6.a(2, res.status(401).json({
            success: false,
            message: "Invalid Sender id"
          }));
        case 4:
          if (receiver) {
            _context6.n = 5;
            break;
          }
          return _context6.a(2, res.status(401).json({
            success: false,
            message: "Invalid Receiver id"
          }));
        case 5:
          if (!sender.friends.includes(receiverId)) {
            _context6.n = 6;
            break;
          }
          return _context6.a(2, res.status(401).json({
            success: false,
            message: "User is already a friend"
          }));
        case 6:
          _context6.n = 7;
          return sendFriendRequest(senderId, receiverId);
        case 7:
          friendReq = _context6.v;
          res.json({
            success: true,
            message: "Friend Request successfully sent to user ".concat(receiverId, " "),
            friendReq: friendReq
          });
          _context6.n = 9;
          break;
        case 8:
          _context6.p = 8;
          _t6 = _context6.v;
          res.status(500).json({
            error: _t6.message
          });
        case 9:
          return _context6.a(2);
      }
    }, _callee6, null, [[1, 8]]);
  }));
  return function (_x1, _x10) {
    return _ref6.apply(this, arguments);
  };
}());
router.post("/acceptFriendReq/:id", /*#__PURE__*/function () {
  var _ref7 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee7(req, res) {
    var acceptedId, acceptingId, acceptingUser, acceptedUser, acceptReq, _t7;
    return _regenerator().w(function (_context7) {
      while (1) switch (_context7.p = _context7.n) {
        case 0:
          acceptedId = parseInt(req.params.id);
          acceptingId = req.body.acceptingId;
          _context7.p = 1;
          _context7.n = 2;
          return getUserById(acceptingId);
        case 2:
          acceptingUser = _context7.v;
          _context7.n = 3;
          return getUserById(acceptedId);
        case 3:
          acceptedUser = _context7.v;
          if (acceptingUser) {
            _context7.n = 4;
            break;
          }
          return _context7.a(2, res.status(401).json({
            success: false,
            message: "Invalid Accepting id"
          }));
        case 4:
          if (acceptedUser) {
            _context7.n = 5;
            break;
          }
          return _context7.a(2, res.status(401).json({
            success: false,
            message: "Invalid Accepted id"
          }));
        case 5:
          if (acceptingUser.requests.includes(acceptedId)) {
            _context7.n = 6;
            break;
          }
          return _context7.a(2, res.status(401).json({
            success: false,
            message: "User did not send Friend Request"
          }));
        case 6:
          if (!acceptingUser.friends.includes(acceptedId)) {
            _context7.n = 7;
            break;
          }
          return _context7.a(2, res.status(401).json({
            success: false,
            message: "User is already a friend"
          }));
        case 7:
          _context7.n = 8;
          return acceptFriendRequest(acceptingId, acceptedId);
        case 8:
          acceptReq = _context7.v;
          res.json({
            success: true,
            message: "User ".concat(acceptedId, " is now a Friend"),
            acceptReq: acceptReq
          });
          _context7.n = 10;
          break;
        case 9:
          _context7.p = 9;
          _t7 = _context7.v;
          res.status(500).json({
            error: _t7.message
          });
        case 10:
          return _context7.a(2);
      }
    }, _callee7, null, [[1, 9]]);
  }));
  return function (_x11, _x12) {
    return _ref7.apply(this, arguments);
  };
}());
router.post("/removeFriend/:id", /*#__PURE__*/function () {
  var _ref8 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee8(req, res) {
    var removedId, userId, removedUser, user, _t8;
    return _regenerator().w(function (_context8) {
      while (1) switch (_context8.p = _context8.n) {
        case 0:
          removedId = parseInt(req.params.id);
          userId = req.body.userId;
          _context8.p = 1;
          _context8.n = 2;
          return getUserById(removedId);
        case 2:
          removedUser = _context8.v;
          _context8.n = 3;
          return getUserById(userId);
        case 3:
          user = _context8.v;
          if (!(!user || !removedUser)) {
            _context8.n = 4;
            break;
          }
          return _context8.a(2, res.status(401).json({
            success: false,
            message: "Invalid user ID(s)"
          }));
        case 4:
          _context8.n = 5;
          return removeFriend(userId, removedId);
        case 5:
          res.json({
            success: true,
            message: "Friend removed successfully"
          });
          _context8.n = 7;
          break;
        case 6:
          _context8.p = 6;
          _t8 = _context8.v;
          res.status(500).json({
            success: false,
            message: _t8.message
          });
        case 7:
          return _context8.a(2);
      }
    }, _callee8, null, [[1, 6]]);
  }));
  return function (_x13, _x14) {
    return _ref8.apply(this, arguments);
  };
}());
router.post("/rejectFriendReq/:id", /*#__PURE__*/function () {
  var _ref9 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee9(req, res) {
    var rejectedId, rejectingId, rejectingUser, acceptReq, _t9;
    return _regenerator().w(function (_context9) {
      while (1) switch (_context9.p = _context9.n) {
        case 0:
          rejectedId = parseInt(req.params.id);
          rejectingId = req.body.rejectingId;
          _context9.p = 1;
          _context9.n = 2;
          return getUserById(rejectingId);
        case 2:
          rejectingUser = _context9.v;
          if (rejectingUser) {
            _context9.n = 3;
            break;
          }
          return _context9.a(2, res.status(401).json({
            success: false,
            message: "Invalid Rejecting id"
          }));
        case 3:
          if (rejectingUser.requests.includes(rejectedId)) {
            _context9.n = 4;
            break;
          }
          return _context9.a(2, res.status(401).json({
            success: false,
            message: "Usersss did not send Friend Request"
          }));
        case 4:
          _context9.n = 5;
          return rejectFriendRequest(rejectingId, rejectedId);
        case 5:
          acceptReq = _context9.v;
          res.json({
            success: true,
            message: "User ".concat(rejectedId, "'s Friend Request was successfully rejected"),
            acceptReq: acceptReq
          });
          _context9.n = 7;
          break;
        case 6:
          _context9.p = 6;
          _t9 = _context9.v;
          res.status(500).json({
            error: _t9.message
          });
        case 7:
          return _context9.a(2);
      }
    }, _callee9, null, [[1, 6]]);
  }));
  return function (_x15, _x16) {
    return _ref9.apply(this, arguments);
  };
}());

// update user image
router.patch("/profileImage", uploadImage.single("image"), /*#__PURE__*/function () {
  var _ref0 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee0(req, res) {
    var idNum, imagePath, user, _t0;
    return _regenerator().w(function (_context0) {
      while (1) switch (_context0.p = _context0.n) {
        case 0:
          idNum = req.body.idNum;
          imagePath = "/assets/images/".concat(req.file.filename);
          console.log("route: " + imagePath);
          _context0.p = 1;
          _context0.n = 2;
          return updateUserImage(idNum, imagePath);
        case 2:
          user = _context0.v;
          res.json({
            success: true,
            message: "Profile Image Updated Successfully",
            user: user
          });
          _context0.n = 4;
          break;
        case 3:
          _context0.p = 3;
          _t0 = _context0.v;
          res.status(500).json({
            error: _t0.message
          });
        case 4:
          return _context0.a(2);
      }
    }, _callee0, null, [[1, 3]]);
  }));
  return function (_x17, _x18) {
    return _ref0.apply(this, arguments);
  };
}());
module.exports = router;