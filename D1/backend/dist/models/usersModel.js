"use strict";

function _regenerator() { /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */ var e, t, r = "function" == typeof Symbol ? Symbol : {}, n = r.iterator || "@@iterator", o = r.toStringTag || "@@toStringTag"; function i(r, n, o, i) { var c = n && n.prototype instanceof Generator ? n : Generator, u = Object.create(c.prototype); return _regeneratorDefine2(u, "_invoke", function (r, n, o) { var i, c, u, f = 0, p = o || [], y = !1, G = { p: 0, n: 0, v: e, a: d, f: d.bind(e, 4), d: function d(t, r) { return i = t, c = 0, u = e, G.n = r, a; } }; function d(r, n) { for (c = r, u = n, t = 0; !y && f && !o && t < p.length; t++) { var o, i = p[t], d = G.p, l = i[2]; r > 3 ? (o = l === n) && (u = i[(c = i[4]) ? 5 : (c = 3, 3)], i[4] = i[5] = e) : i[0] <= d && ((o = r < 2 && d < i[1]) ? (c = 0, G.v = n, G.n = i[1]) : d < l && (o = r < 3 || i[0] > n || n > l) && (i[4] = r, i[5] = n, G.n = l, c = 0)); } if (o || r > 1) return a; throw y = !0, n; } return function (o, p, l) { if (f > 1) throw TypeError("Generator is already running"); for (y && 1 === p && d(p, l), c = p, u = l; (t = c < 2 ? e : u) || !y;) { i || (c ? c < 3 ? (c > 1 && (G.n = -1), d(c, u)) : G.n = u : G.v = u); try { if (f = 2, i) { if (c || (o = "next"), t = i[o]) { if (!(t = t.call(i, u))) throw TypeError("iterator result is not an object"); if (!t.done) return t; u = t.value, c < 2 && (c = 0); } else 1 === c && (t = i["return"]) && t.call(i), c < 2 && (u = TypeError("The iterator does not provide a '" + o + "' method"), c = 1); i = e; } else if ((t = (y = G.n < 0) ? u : r.call(n, G)) !== a) break; } catch (t) { i = e, c = 1, u = t; } finally { f = 1; } } return { value: t, done: y }; }; }(r, o, i), !0), u; } var a = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} t = Object.getPrototypeOf; var c = [][n] ? t(t([][n]())) : (_regeneratorDefine2(t = {}, n, function () { return this; }), t), u = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(c); function f(e) { return Object.setPrototypeOf ? Object.setPrototypeOf(e, GeneratorFunctionPrototype) : (e.__proto__ = GeneratorFunctionPrototype, _regeneratorDefine2(e, o, "GeneratorFunction")), e.prototype = Object.create(u), e; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, _regeneratorDefine2(u, "constructor", GeneratorFunctionPrototype), _regeneratorDefine2(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = "GeneratorFunction", _regeneratorDefine2(GeneratorFunctionPrototype, o, "GeneratorFunction"), _regeneratorDefine2(u), _regeneratorDefine2(u, o, "Generator"), _regeneratorDefine2(u, n, function () { return this; }), _regeneratorDefine2(u, "toString", function () { return "[object Generator]"; }), (_regenerator = function _regenerator() { return { w: i, m: f }; })(); }
function _regeneratorDefine2(e, r, n, t) { var i = Object.defineProperty; try { i({}, "", {}); } catch (e) { i = 0; } _regeneratorDefine2 = function _regeneratorDefine(e, r, n, t) { function o(r, n) { _regeneratorDefine2(e, r, function (e) { return this._invoke(r, n, e); }); } r ? i ? i(e, r, { value: n, enumerable: !t, configurable: !t, writable: !t }) : e[r] = n : (o("next", 0), o("throw", 1), o("return", 2)); }, _regeneratorDefine2(e, r, n, t); }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }
var _require = require("../database"),
  runFindQuery = _require.runFindQuery,
  runInsertQuery = _require.runInsertQuery,
  runUpdateQuery = _require.runUpdateQuery,
  runDeleteQuery = _require.runDeleteQuery;

//  Read
// get all users 
function getUsers() {
  return _getUsers.apply(this, arguments);
} // get user by email
function _getUsers() {
  _getUsers = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee() {
    var users;
    return _regenerator().w(function (_context) {
      while (1) switch (_context.n) {
        case 0:
          _context.n = 1;
          return runFindQuery("users");
        case 1:
          users = _context.v;
          return _context.a(2, users || null);
      }
    }, _callee);
  }));
  return _getUsers.apply(this, arguments);
}
function getUserByEmail(_x) {
  return _getUserByEmail.apply(this, arguments);
} // get user friends
function _getUserByEmail() {
  _getUserByEmail = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee2(email) {
    var users;
    return _regenerator().w(function (_context2) {
      while (1) switch (_context2.n) {
        case 0:
          _context2.n = 1;
          return runFindQuery("users", {
            email: email
          });
        case 1:
          users = _context2.v;
          return _context2.a(2, users[0] || null);
      }
    }, _callee2);
  }));
  return _getUserByEmail.apply(this, arguments);
}
function getUserFriends(_x2) {
  return _getUserFriends.apply(this, arguments);
} // get user by id
function _getUserFriends() {
  _getUserFriends = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee3(userId) {
    var user, friendIds;
    return _regenerator().w(function (_context3) {
      while (1) switch (_context3.n) {
        case 0:
          _context3.n = 1;
          return getUserById(userId);
        case 1:
          user = _context3.v;
          if (user) {
            _context3.n = 2;
            break;
          }
          return _context3.a(2, []);
        case 2:
          friendIds = user.friends || [];
          if (!(friendIds.length === 0)) {
            _context3.n = 3;
            break;
          }
          return _context3.a(2, []);
        case 3:
          _context3.n = 4;
          return runFindQuery("users", {
            id: {
              $in: friendIds
            }
          });
        case 4:
          return _context3.a(2, _context3.v);
      }
    }, _callee3);
  }));
  return _getUserFriends.apply(this, arguments);
}
function getUserById(_x3) {
  return _getUserById.apply(this, arguments);
} // Create
// Add a user
function _getUserById() {
  _getUserById = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee4(id) {
    var users;
    return _regenerator().w(function (_context4) {
      while (1) switch (_context4.n) {
        case 0:
          _context4.n = 1;
          return runFindQuery("users", {
            id: id
          });
        case 1:
          users = _context4.v;
          return _context4.a(2, users[0] || null);
      }
    }, _callee4);
  }));
  return _getUserById.apply(this, arguments);
}
function addUser(_x4) {
  return _addUser.apply(this, arguments);
} // Update 
// Edit a user profile 
function _addUser() {
  _addUser = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee5(newUser) {
    return _regenerator().w(function (_context5) {
      while (1) switch (_context5.n) {
        case 0:
          _context5.n = 1;
          return runInsertQuery("users", newUser);
        case 1:
          return _context5.a(2, _context5.v);
      }
    }, _callee5);
  }));
  return _addUser.apply(this, arguments);
}
function updateUserProfile(_x5, _x6) {
  return _updateUserProfile.apply(this, arguments);
} // send friend request
// (param: id: id of user sending request)
// add id to receiver's requests array
function _updateUserProfile() {
  _updateUserProfile = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee6(id, updates) {
    return _regenerator().w(function (_context6) {
      while (1) switch (_context6.n) {
        case 0:
          _context6.n = 1;
          return runUpdateQuery("users", {
            id: id
          }, {
            $set: updates
          });
        case 1:
          _context6.n = 2;
          return getUserById(id);
        case 2:
          return _context6.a(2, _context6.v);
      }
    }, _callee6);
  }));
  return _updateUserProfile.apply(this, arguments);
}
function sendFriendRequest(_x7, _x8) {
  return _sendFriendRequest.apply(this, arguments);
}
function _sendFriendRequest() {
  _sendFriendRequest = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee7(senderId, receiverId) {
    return _regenerator().w(function (_context7) {
      while (1) switch (_context7.n) {
        case 0:
          _context7.n = 1;
          return runUpdateQuery("users", {
            id: receiverId
          },
          // that user 
          {
            $addToSet: {
              requests: senderId
            }
          });
        case 1:
          return _context7.a(2, _context7.v);
      }
    }, _callee7);
  }));
  return _sendFriendRequest.apply(this, arguments);
}
function removeFriend(_x9, _x0) {
  return _removeFriend.apply(this, arguments);
} // accept friend request
// remove that id from requests, and add to friends array
function _removeFriend() {
  _removeFriend = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee8(removerId, removedId) {
    return _regenerator().w(function (_context8) {
      while (1) switch (_context8.n) {
        case 0:
          _context8.n = 1;
          return runUpdateQuery("users", {
            id: removerId
          },
          // that user 
          {
            $pull: {
              friends: removedId
            }
          });
        case 1:
          _context8.n = 2;
          return runUpdateQuery("users", {
            id: removedId
          },
          // that user 
          {
            $pull: {
              friends: removerId
            }
          });
        case 2:
          return _context8.a(2, _context8.v);
      }
    }, _callee8);
  }));
  return _removeFriend.apply(this, arguments);
}
function acceptFriendRequest(_x1, _x10) {
  return _acceptFriendRequest.apply(this, arguments);
} // reject friend request
// remove that id from requests
function _acceptFriendRequest() {
  _acceptFriendRequest = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee9(receiverId, senderId) {
    return _regenerator().w(function (_context9) {
      while (1) switch (_context9.n) {
        case 0:
          _context9.n = 1;
          return runUpdateQuery("users", {
            id: receiverId
          },
          // receiver

          // remove from request and add to friends
          {
            $pull: {
              requests: senderId
            },
            $addToSet: {
              friends: senderId
            }
          });
        case 1:
          _context9.n = 2;
          return runUpdateQuery("users", {
            id: senderId
          }, {
            $addToSet: {
              friends: receiverId
            }
          });
        case 2:
          return _context9.a(2, _context9.v);
      }
    }, _callee9);
  }));
  return _acceptFriendRequest.apply(this, arguments);
}
function rejectFriendRequest(_x11, _x12) {
  return _rejectFriendRequest.apply(this, arguments);
} // add project 
function _rejectFriendRequest() {
  _rejectFriendRequest = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee0(receiverId, senderId) {
    return _regenerator().w(function (_context0) {
      while (1) switch (_context0.n) {
        case 0:
          _context0.n = 1;
          return runUpdateQuery("users", {
            id: receiverId
          }, {
            $pull: {
              requests: senderId
            }
          });
        case 1:
          return _context0.a(2, _context0.v);
      }
    }, _callee0);
  }));
  return _rejectFriendRequest.apply(this, arguments);
}
function addUserProject(_x13, _x14) {
  return _addUserProject.apply(this, arguments);
} // add project 
function _addUserProject() {
  _addUserProject = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee1(userId, projectId) {
    return _regenerator().w(function (_context1) {
      while (1) switch (_context1.n) {
        case 0:
          _context1.n = 1;
          return runUpdateQuery("users", {
            id: userId
          },
          // that user 
          {
            $addToSet: {
              projects: projectId
            }
          });
        case 1:
          return _context1.a(2, _context1.v);
      }
    }, _callee1);
  }));
  return _addUserProject.apply(this, arguments);
}
function removeUserProject(_x15, _x16) {
  return _removeUserProject.apply(this, arguments);
} // update profile image
function _removeUserProject() {
  _removeUserProject = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee10(userId, projectId) {
    return _regenerator().w(function (_context10) {
      while (1) switch (_context10.n) {
        case 0:
          _context10.n = 1;
          return runUpdateQuery("users", {
            id: userId
          },
          // that user 
          {
            $pull: {
              projects: projectId
            }
          });
        case 1:
          return _context10.a(2, _context10.v);
      }
    }, _callee10);
  }));
  return _removeUserProject.apply(this, arguments);
}
function updateUserImage(_x17, _x18) {
  return _updateUserImage.apply(this, arguments);
} // Delete
// remove a user ? admin?
function _updateUserImage() {
  _updateUserImage = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee11(idNum, imagePath) {
    return _regenerator().w(function (_context11) {
      while (1) switch (_context11.n) {
        case 0:
          console.log("backend: " + imagePath);
          console.log("id: " + idNum);
          _context11.n = 1;
          return runUpdateQuery("users",
          // change path of image
          {
            id: parseInt(idNum)
          }, {
            $set: {
              image: imagePath
            }
          });
        case 1:
          _context11.n = 2;
          return getUserById(idNum);
        case 2:
          return _context11.a(2, _context11.v);
      }
    }, _callee11);
  }));
  return _updateUserImage.apply(this, arguments);
}
function removeUser(_x19) {
  return _removeUser.apply(this, arguments);
}
function _removeUser() {
  _removeUser = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee12(id) {
    return _regenerator().w(function (_context12) {
      while (1) switch (_context12.n) {
        case 0:
          _context12.n = 1;
          return runDeleteQuery("users", {
            id: id
          });
        case 1:
          return _context12.a(2, _context12.v);
      }
    }, _callee12);
  }));
  return _removeUser.apply(this, arguments);
}
module.exports = {
  getUsers: getUsers,
  getUserByEmail: getUserByEmail,
  getUserFriends: getUserFriends,
  getUserById: getUserById,
  addUser: addUser,
  updateUserProfile: updateUserProfile,
  sendFriendRequest: sendFriendRequest,
  acceptFriendRequest: acceptFriendRequest,
  rejectFriendRequest: rejectFriendRequest,
  addUserProject: addUserProject,
  updateUserImage: updateUserImage,
  removeUser: removeUser,
  removeUserProject: removeUserProject,
  removeFriend: removeFriend
};