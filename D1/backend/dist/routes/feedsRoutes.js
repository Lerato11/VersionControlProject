"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _regenerator() { /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */ var e, t, r = "function" == typeof Symbol ? Symbol : {}, n = r.iterator || "@@iterator", o = r.toStringTag || "@@toStringTag"; function i(r, n, o, i) { var c = n && n.prototype instanceof Generator ? n : Generator, u = Object.create(c.prototype); return _regeneratorDefine2(u, "_invoke", function (r, n, o) { var i, c, u, f = 0, p = o || [], y = !1, G = { p: 0, n: 0, v: e, a: d, f: d.bind(e, 4), d: function d(t, r) { return i = t, c = 0, u = e, G.n = r, a; } }; function d(r, n) { for (c = r, u = n, t = 0; !y && f && !o && t < p.length; t++) { var o, i = p[t], d = G.p, l = i[2]; r > 3 ? (o = l === n) && (u = i[(c = i[4]) ? 5 : (c = 3, 3)], i[4] = i[5] = e) : i[0] <= d && ((o = r < 2 && d < i[1]) ? (c = 0, G.v = n, G.n = i[1]) : d < l && (o = r < 3 || i[0] > n || n > l) && (i[4] = r, i[5] = n, G.n = l, c = 0)); } if (o || r > 1) return a; throw y = !0, n; } return function (o, p, l) { if (f > 1) throw TypeError("Generator is already running"); for (y && 1 === p && d(p, l), c = p, u = l; (t = c < 2 ? e : u) || !y;) { i || (c ? c < 3 ? (c > 1 && (G.n = -1), d(c, u)) : G.n = u : G.v = u); try { if (f = 2, i) { if (c || (o = "next"), t = i[o]) { if (!(t = t.call(i, u))) throw TypeError("iterator result is not an object"); if (!t.done) return t; u = t.value, c < 2 && (c = 0); } else 1 === c && (t = i["return"]) && t.call(i), c < 2 && (u = TypeError("The iterator does not provide a '" + o + "' method"), c = 1); i = e; } else if ((t = (y = G.n < 0) ? u : r.call(n, G)) !== a) break; } catch (t) { i = e, c = 1, u = t; } finally { f = 1; } } return { value: t, done: y }; }; }(r, o, i), !0), u; } var a = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} t = Object.getPrototypeOf; var c = [][n] ? t(t([][n]())) : (_regeneratorDefine2(t = {}, n, function () { return this; }), t), u = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(c); function f(e) { return Object.setPrototypeOf ? Object.setPrototypeOf(e, GeneratorFunctionPrototype) : (e.__proto__ = GeneratorFunctionPrototype, _regeneratorDefine2(e, o, "GeneratorFunction")), e.prototype = Object.create(u), e; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, _regeneratorDefine2(u, "constructor", GeneratorFunctionPrototype), _regeneratorDefine2(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = "GeneratorFunction", _regeneratorDefine2(GeneratorFunctionPrototype, o, "GeneratorFunction"), _regeneratorDefine2(u), _regeneratorDefine2(u, o, "Generator"), _regeneratorDefine2(u, n, function () { return this; }), _regeneratorDefine2(u, "toString", function () { return "[object Generator]"; }), (_regenerator = function _regenerator() { return { w: i, m: f }; })(); }
function _regeneratorDefine2(e, r, n, t) { var i = Object.defineProperty; try { i({}, "", {}); } catch (e) { i = 0; } _regeneratorDefine2 = function _regeneratorDefine(e, r, n, t) { function o(r, n) { _regeneratorDefine2(e, r, function (e) { return this._invoke(r, n, e); }); } r ? i ? i(e, r, { value: n, enumerable: !t, configurable: !t, writable: !t }) : e[r] = n : (o("next", 0), o("throw", 1), o("return", 2)); }, _regeneratorDefine2(e, r, n, t); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }
var express = require("express");
var _require = require("../models/feedsModel"),
  getFeeds = _require.getFeeds,
  getFeedsByUserId = _require.getFeedsByUserId,
  addFeed = _require.addFeed,
  getNextFeedId = _require.getNextFeedId,
  getFriendsFeed = _require.getFriendsFeed;
var _require2 = require("../models/usersModel"),
  getUserById = _require2.getUserById;
var _require3 = require("../models/projectsModel"),
  getProjectById = _require3.getProjectById;
var router = express.Router();

//  Read
// get all feeds
router.get("/", /*#__PURE__*/function () {
  var _ref = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee2(req, res) {
    var feeds, enrichedFeeds, _t;
    return _regenerator().w(function (_context2) {
      while (1) switch (_context2.p = _context2.n) {
        case 0:
          _context2.p = 0;
          _context2.n = 1;
          return getFeeds();
        case 1:
          feeds = _context2.v;
          _context2.n = 2;
          return Promise.all(feeds.map(/*#__PURE__*/function () {
            var _ref2 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee(feed) {
              var user, project;
              return _regenerator().w(function (_context) {
                while (1) switch (_context.n) {
                  case 0:
                    _context.n = 1;
                    return getUserById(feed.user_id);
                  case 1:
                    user = _context.v;
                    _context.n = 2;
                    return getProjectById(feed.project_id);
                  case 2:
                    project = _context.v;
                    return _context.a(2, _objectSpread(_objectSpread({}, feed), {}, {
                      userName: (user === null || user === void 0 ? void 0 : user.username) || "Unknown",
                      profilePic: (user === null || user === void 0 ? void 0 : user.image) || "/assets/images/default-user.jpg",
                      profileImage: (project === null || project === void 0 ? void 0 : project.projectImage) || "/assets/images/default-project.jpg"
                    }));
                }
              }, _callee);
            }));
            return function (_x3) {
              return _ref2.apply(this, arguments);
            };
          }()));
        case 2:
          enrichedFeeds = _context2.v;
          res.json(enrichedFeeds);
          _context2.n = 4;
          break;
        case 3:
          _context2.p = 3;
          _t = _context2.v;
          res.status(500).json({
            error: _t.message
          });
        case 4:
          return _context2.a(2);
      }
    }, _callee2, null, [[0, 3]]);
  }));
  return function (_x, _x2) {
    return _ref.apply(this, arguments);
  };
}());

// get feeds by project_id
// (get )
router.get("/local", /*#__PURE__*/function () {
  var _ref3 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee4(req, res) {
    var userId, feeds, enrichedFeeds, _t2;
    return _regenerator().w(function (_context4) {
      while (1) switch (_context4.p = _context4.n) {
        case 0:
          _context4.p = 0;
          userId = parseInt(req.query.userId); // if valid project
          if (!isNaN(userId)) {
            _context4.n = 1;
            break;
          }
          return _context4.a(2, res.status(401).json({
            success: false,
            message: "Missing or invalid userId"
          }));
        case 1:
          _context4.n = 2;
          return getFriendsFeed(userId);
        case 2:
          feeds = _context4.v;
          _context4.n = 3;
          return Promise.all(feeds.map(/*#__PURE__*/function () {
            var _ref4 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee3(feed) {
              var user, project;
              return _regenerator().w(function (_context3) {
                while (1) switch (_context3.n) {
                  case 0:
                    _context3.n = 1;
                    return getUserById(feed.user_id);
                  case 1:
                    user = _context3.v;
                    _context3.n = 2;
                    return getProjectById(feed.project_id);
                  case 2:
                    project = _context3.v;
                    return _context3.a(2, _objectSpread(_objectSpread({}, feed), {}, {
                      userName: (user === null || user === void 0 ? void 0 : user.username) || "Unknown",
                      profilePic: (user === null || user === void 0 ? void 0 : user.image) || "/assets/images/default-user.jpg",
                      profileImage: (project === null || project === void 0 ? void 0 : project.projectImage) || "/assets/images/default-project.jpg"
                    }));
                }
              }, _callee3);
            }));
            return function (_x6) {
              return _ref4.apply(this, arguments);
            };
          }()));
        case 3:
          enrichedFeeds = _context4.v;
          res.json({
            success: true,
            enrichedFeeds: enrichedFeeds
          });
          _context4.n = 5;
          break;
        case 4:
          _context4.p = 4;
          _t2 = _context4.v;
          console.log(_t2);
          res.status(500).json({
            error: _t2.message
          });
        case 5:
          return _context4.a(2);
      }
    }, _callee4, null, [[0, 4]]);
  }));
  return function (_x4, _x5) {
    return _ref3.apply(this, arguments);
  };
}());

// Create
// Add a feed
// add project
router.post("/", /*#__PURE__*/function () {
  var _ref5 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee5(req, res) {
    var _req$body, message, user_id, project_id, type, newFeed, createdFeed, _t3, _t4, _t5, _t6, _t7, _t8;
    return _regenerator().w(function (_context5) {
      while (1) switch (_context5.p = _context5.n) {
        case 0:
          _req$body = req.body, message = _req$body.message, user_id = _req$body.user_id, project_id = _req$body.project_id, type = _req$body.type;
          _context5.p = 1;
          _context5.n = 2;
          return getNextFeedId();
        case 2:
          _t3 = _context5.v;
          _t4 = message;
          _t5 = user_id;
          _t6 = project_id;
          _t7 = type;
          newFeed = {
            id: _t3,
            message: _t4,
            user_id: _t5,
            project_id: _t6,
            type: _t7
          };
          _context5.n = 3;
          return addFeed(newFeed);
        case 3:
          createdFeed = _context5.v;
          res.json({
            success: true,
            message: "Project successfully added",
            createdFeed: createdFeed
          });
          _context5.n = 5;
          break;
        case 4:
          _context5.p = 4;
          _t8 = _context5.v;
          res.status(500).json({
            error: _t8.message
          });
        case 5:
          return _context5.a(2);
      }
    }, _callee5, null, [[1, 4]]);
  }));
  return function (_x7, _x8) {
    return _ref5.apply(this, arguments);
  };
}());
module.exports = router;