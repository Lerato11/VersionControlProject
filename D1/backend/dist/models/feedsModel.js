"use strict";

function _regenerator() { /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */ var e, t, r = "function" == typeof Symbol ? Symbol : {}, n = r.iterator || "@@iterator", o = r.toStringTag || "@@toStringTag"; function i(r, n, o, i) { var c = n && n.prototype instanceof Generator ? n : Generator, u = Object.create(c.prototype); return _regeneratorDefine2(u, "_invoke", function (r, n, o) { var i, c, u, f = 0, p = o || [], y = !1, G = { p: 0, n: 0, v: e, a: d, f: d.bind(e, 4), d: function d(t, r) { return i = t, c = 0, u = e, G.n = r, a; } }; function d(r, n) { for (c = r, u = n, t = 0; !y && f && !o && t < p.length; t++) { var o, i = p[t], d = G.p, l = i[2]; r > 3 ? (o = l === n) && (u = i[(c = i[4]) ? 5 : (c = 3, 3)], i[4] = i[5] = e) : i[0] <= d && ((o = r < 2 && d < i[1]) ? (c = 0, G.v = n, G.n = i[1]) : d < l && (o = r < 3 || i[0] > n || n > l) && (i[4] = r, i[5] = n, G.n = l, c = 0)); } if (o || r > 1) return a; throw y = !0, n; } return function (o, p, l) { if (f > 1) throw TypeError("Generator is already running"); for (y && 1 === p && d(p, l), c = p, u = l; (t = c < 2 ? e : u) || !y;) { i || (c ? c < 3 ? (c > 1 && (G.n = -1), d(c, u)) : G.n = u : G.v = u); try { if (f = 2, i) { if (c || (o = "next"), t = i[o]) { if (!(t = t.call(i, u))) throw TypeError("iterator result is not an object"); if (!t.done) return t; u = t.value, c < 2 && (c = 0); } else 1 === c && (t = i["return"]) && t.call(i), c < 2 && (u = TypeError("The iterator does not provide a '" + o + "' method"), c = 1); i = e; } else if ((t = (y = G.n < 0) ? u : r.call(n, G)) !== a) break; } catch (t) { i = e, c = 1, u = t; } finally { f = 1; } } return { value: t, done: y }; }; }(r, o, i), !0), u; } var a = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} t = Object.getPrototypeOf; var c = [][n] ? t(t([][n]())) : (_regeneratorDefine2(t = {}, n, function () { return this; }), t), u = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(c); function f(e) { return Object.setPrototypeOf ? Object.setPrototypeOf(e, GeneratorFunctionPrototype) : (e.__proto__ = GeneratorFunctionPrototype, _regeneratorDefine2(e, o, "GeneratorFunction")), e.prototype = Object.create(u), e; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, _regeneratorDefine2(u, "constructor", GeneratorFunctionPrototype), _regeneratorDefine2(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = "GeneratorFunction", _regeneratorDefine2(GeneratorFunctionPrototype, o, "GeneratorFunction"), _regeneratorDefine2(u), _regeneratorDefine2(u, o, "Generator"), _regeneratorDefine2(u, n, function () { return this; }), _regeneratorDefine2(u, "toString", function () { return "[object Generator]"; }), (_regenerator = function _regenerator() { return { w: i, m: f }; })(); }
function _regeneratorDefine2(e, r, n, t) { var i = Object.defineProperty; try { i({}, "", {}); } catch (e) { i = 0; } _regeneratorDefine2 = function _regeneratorDefine(e, r, n, t) { function o(r, n) { _regeneratorDefine2(e, r, function (e) { return this._invoke(r, n, e); }); } r ? i ? i(e, r, { value: n, enumerable: !t, configurable: !t, writable: !t }) : e[r] = n : (o("next", 0), o("throw", 1), o("return", 2)); }, _regeneratorDefine2(e, r, n, t); }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }
var _require = require("../database"),
  runFindQuery = _require.runFindQuery,
  runInsertQuery = _require.runInsertQuery,
  runUpdateQuery = _require.runUpdateQuery;
var _require2 = require("../models/usersModel"),
  getUserById = _require2.getUserById;

// Read

// get all feeds (global)
function getFeeds() {
  return _getFeeds.apply(this, arguments);
} // get friend feeds (local)
function _getFeeds() {
  _getFeeds = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee() {
    var feeds;
    return _regenerator().w(function (_context) {
      while (1) switch (_context.n) {
        case 0:
          _context.n = 1;
          return runFindQuery("feeds");
        case 1:
          feeds = _context.v;
          return _context.a(2, feeds || null);
      }
    }, _callee);
  }));
  return _getFeeds.apply(this, arguments);
}
function getFeedsByUserId(_x) {
  return _getFeedsByUserId.apply(this, arguments);
} // Create
// create a feed (on check in / out)
function _getFeedsByUserId() {
  _getFeedsByUserId = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee2(userId) {
    var feeds;
    return _regenerator().w(function (_context2) {
      while (1) switch (_context2.n) {
        case 0:
          _context2.n = 1;
          return runFindQuery("feeds", {
            userId: userId
          });
        case 1:
          feeds = _context2.v;
          return _context2.a(2, feeds[0] || null);
      }
    }, _callee2);
  }));
  return _getFeedsByUserId.apply(this, arguments);
}
function addFeed(_x2) {
  return _addFeed.apply(this, arguments);
}
function _addFeed() {
  _addFeed = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee3(newFeed) {
    return _regenerator().w(function (_context3) {
      while (1) switch (_context3.n) {
        case 0:
          _context3.n = 1;
          return runInsertQuery("feeds", newFeed);
        case 1:
          return _context3.a(2, _context3.v);
      }
    }, _callee3);
  }));
  return _addFeed.apply(this, arguments);
}
function getNextFeedId() {
  return _getNextFeedId.apply(this, arguments);
}
function _getNextFeedId() {
  _getNextFeedId = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee4() {
    var lastFeed;
    return _regenerator().w(function (_context4) {
      while (1) switch (_context4.n) {
        case 0:
          _context4.n = 1;
          return runFindQuery("feeds", {}, {
            sort: {
              id: -1
            },
            limit: 1
          });
        case 1:
          lastFeed = _context4.v;
          return _context4.a(2, lastFeed.length ? lastFeed[0].id + 1 : 1);
      }
    }, _callee4);
  }));
  return _getNextFeedId.apply(this, arguments);
}
function getFriendsFeed(_x3) {
  return _getFriendsFeed.apply(this, arguments);
} // Update and Delete a feed? 
function _getFriendsFeed() {
  _getFriendsFeed = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee5(userId) {
    var user, friendsIds, feeds;
    return _regenerator().w(function (_context5) {
      while (1) switch (_context5.n) {
        case 0:
          _context5.n = 1;
          return getUserById(userId);
        case 1:
          user = _context5.v;
          if (user) {
            _context5.n = 2;
            break;
          }
          return _context5.a(2, []);
        case 2:
          friendsIds = user.friends || []; // get feeds where feed.userId is in friendsIds
          _context5.n = 3;
          return runFindQuery("feeds", {
            user_id: {
              $in: friendsIds
            }
          }, {
            sort: {
              id: -1
            }
          });
        case 3:
          feeds = _context5.v;
          return _context5.a(2, feeds);
      }
    }, _callee5);
  }));
  return _getFriendsFeed.apply(this, arguments);
}
module.exports = {
  getFeeds: getFeeds,
  getFeedsByUserId: getFeedsByUserId,
  addFeed: addFeed,
  getNextFeedId: getNextFeedId,
  getFriendsFeed: getFriendsFeed
};