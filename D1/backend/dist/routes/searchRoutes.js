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
var router = express.Router();
var _require = require("../models/feedsModel"),
  getFeeds = _require.getFeeds;
var _require2 = require("../models/usersModel"),
  getUserById = _require2.getUserById;
var _require3 = require("../models/projectsModel"),
  getProjectById = _require3.getProjectById;
var _require4 = require("../models/projectsModel"),
  getProjects = _require4.getProjects; // make sure you have a function to get all projects
var _require5 = require("../models/usersModel"),
  getUsers = _require5.getUsers; // function to get all users

// Search endpoint
router.get("/", /*#__PURE__*/function () {
  var _ref = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee2(req, res) {
    var _req$query$q;
    var query, users, projects, feeds, enrichedFeeds, filteredFeeds, _t;
    return _regenerator().w(function (_context2) {
      while (1) switch (_context2.p = _context2.n) {
        case 0:
          query = ((_req$query$q = req.query.q) === null || _req$query$q === void 0 ? void 0 : _req$query$q.toLowerCase()) || "";
          if (query) {
            _context2.n = 1;
            break;
          }
          return _context2.a(2, res.json({
            users: [],
            projects: [],
            feeds: []
          }));
        case 1:
          _context2.p = 1;
          _context2.n = 2;
          return getUsers();
        case 2:
          users = _context2.v.filter(function (u) {
            var _u$firstName, _u$username, _u$email;
            return (((_u$firstName = u.firstName) === null || _u$firstName === void 0 ? void 0 : _u$firstName.toLowerCase()) || "").includes(query) || (((_u$username = u.username) === null || _u$username === void 0 ? void 0 : _u$username.toLowerCase()) || "").includes(query) || (((_u$email = u.email) === null || _u$email === void 0 ? void 0 : _u$email.toLowerCase()) || "").includes(query);
          });
          _context2.n = 3;
          return getProjects();
        case 3:
          projects = _context2.v.filter(function (p) {
            var _p$name, _p$type;
            return (((_p$name = p.name) === null || _p$name === void 0 ? void 0 : _p$name.toLowerCase()) || "").includes(query) || (((_p$type = p.type) === null || _p$type === void 0 ? void 0 : _p$type.toLowerCase()) || "").includes(query);
          });
          _context2.n = 4;
          return getFeeds();
        case 4:
          feeds = _context2.v;
          _context2.n = 5;
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
                      projectName: (project === null || project === void 0 ? void 0 : project.name) || "Unknown Project",
                      projectImage: (project === null || project === void 0 ? void 0 : project.projectImage) || "/assets/images/default-project.jpg"
                    }));
                }
              }, _callee);
            }));
            return function (_x3) {
              return _ref2.apply(this, arguments);
            };
          }()));
        case 5:
          enrichedFeeds = _context2.v;
          filteredFeeds = enrichedFeeds.filter(function (f) {
            var _f$message, _f$projectName;
            var hashtags = f.hashtags || [];
            return ((_f$message = f.message) === null || _f$message === void 0 ? void 0 : _f$message.toLowerCase().includes(query)) || ((_f$projectName = f.projectName) === null || _f$projectName === void 0 ? void 0 : _f$projectName.toLowerCase().includes(query)) || hashtags.some(function (tag) {
              return tag.toLowerCase().includes(query);
            });
          });
          res.json({
            users: users,
            projects: projects,
            feeds: filteredFeeds
          });
          _context2.n = 7;
          break;
        case 6:
          _context2.p = 6;
          _t = _context2.v;
          console.error(_t);
          res.status(500).json({
            error: _t.message
          });
        case 7:
          return _context2.a(2);
      }
    }, _callee2, null, [[1, 6]]);
  }));
  return function (_x, _x2) {
    return _ref.apply(this, arguments);
  };
}());
module.exports = router;