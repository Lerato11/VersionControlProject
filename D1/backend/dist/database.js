"use strict";

function _regenerator() { /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */ var e, t, r = "function" == typeof Symbol ? Symbol : {}, n = r.iterator || "@@iterator", o = r.toStringTag || "@@toStringTag"; function i(r, n, o, i) { var c = n && n.prototype instanceof Generator ? n : Generator, u = Object.create(c.prototype); return _regeneratorDefine2(u, "_invoke", function (r, n, o) { var i, c, u, f = 0, p = o || [], y = !1, G = { p: 0, n: 0, v: e, a: d, f: d.bind(e, 4), d: function d(t, r) { return i = t, c = 0, u = e, G.n = r, a; } }; function d(r, n) { for (c = r, u = n, t = 0; !y && f && !o && t < p.length; t++) { var o, i = p[t], d = G.p, l = i[2]; r > 3 ? (o = l === n) && (u = i[(c = i[4]) ? 5 : (c = 3, 3)], i[4] = i[5] = e) : i[0] <= d && ((o = r < 2 && d < i[1]) ? (c = 0, G.v = n, G.n = i[1]) : d < l && (o = r < 3 || i[0] > n || n > l) && (i[4] = r, i[5] = n, G.n = l, c = 0)); } if (o || r > 1) return a; throw y = !0, n; } return function (o, p, l) { if (f > 1) throw TypeError("Generator is already running"); for (y && 1 === p && d(p, l), c = p, u = l; (t = c < 2 ? e : u) || !y;) { i || (c ? c < 3 ? (c > 1 && (G.n = -1), d(c, u)) : G.n = u : G.v = u); try { if (f = 2, i) { if (c || (o = "next"), t = i[o]) { if (!(t = t.call(i, u))) throw TypeError("iterator result is not an object"); if (!t.done) return t; u = t.value, c < 2 && (c = 0); } else 1 === c && (t = i["return"]) && t.call(i), c < 2 && (u = TypeError("The iterator does not provide a '" + o + "' method"), c = 1); i = e; } else if ((t = (y = G.n < 0) ? u : r.call(n, G)) !== a) break; } catch (t) { i = e, c = 1, u = t; } finally { f = 1; } } return { value: t, done: y }; }; }(r, o, i), !0), u; } var a = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} t = Object.getPrototypeOf; var c = [][n] ? t(t([][n]())) : (_regeneratorDefine2(t = {}, n, function () { return this; }), t), u = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(c); function f(e) { return Object.setPrototypeOf ? Object.setPrototypeOf(e, GeneratorFunctionPrototype) : (e.__proto__ = GeneratorFunctionPrototype, _regeneratorDefine2(e, o, "GeneratorFunction")), e.prototype = Object.create(u), e; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, _regeneratorDefine2(u, "constructor", GeneratorFunctionPrototype), _regeneratorDefine2(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = "GeneratorFunction", _regeneratorDefine2(GeneratorFunctionPrototype, o, "GeneratorFunction"), _regeneratorDefine2(u), _regeneratorDefine2(u, o, "Generator"), _regeneratorDefine2(u, n, function () { return this; }), _regeneratorDefine2(u, "toString", function () { return "[object Generator]"; }), (_regenerator = function _regenerator() { return { w: i, m: f }; })(); }
function _regeneratorDefine2(e, r, n, t) { var i = Object.defineProperty; try { i({}, "", {}); } catch (e) { i = 0; } _regeneratorDefine2 = function _regeneratorDefine(e, r, n, t) { function o(r, n) { _regeneratorDefine2(e, r, function (e) { return this._invoke(r, n, e); }); } r ? i ? i(e, r, { value: n, enumerable: !t, configurable: !t, writable: !t }) : e[r] = n : (o("next", 0), o("throw", 1), o("return", 2)); }, _regeneratorDefine2(e, r, n, t); }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }
// position: 6
// studentNumber: u21769584

var express = require("express");
var app = express();
var http = require("http").Server(app);
var _require = require("mongodb"),
  MongoClient = _require.MongoClient;
var uri = "mongodb+srv://test-user:test-password@imy220.7hfsjro.mongodb.net/?retryWrites=true&w=majority&appName=IMY220";
var client = new MongoClient(uri);
var database;
function dbConnect() {
  return _dbConnect.apply(this, arguments);
} // users
// login (add a user)
// get a user (id)
// get a user by name
// update profile
function _dbConnect() {
  _dbConnect = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee() {
    var feedsCol, usersCol, projectsCol;
    return _regenerator().w(function (_context) {
      while (1) switch (_context.n) {
        case 0:
          _context.n = 1;
          return client.connect();
        case 1:
          database = client.db("VersionControlProject");
          feedsCol = database.collection("feeds");
          usersCol = database.collection("users");
          projectsCol = database.collection("projects"); //   const usersCount = await usersCol.countDocuments();
          //   const booksCount = await booksCol.countDocuments();
          //   if (usersCount === 0) {
          //     await usersCol.insertMany(users);
          //     console.log("added users collection!");
          //   }
          //   if (booksCount === 0) {
          //     await booksCol.insertMany(books);
          //     console.log("added books collection!");
          //   }
          // await client.close();
          return _context.a(2, database);
      }
    }, _callee);
  }));
  return _dbConnect.apply(this, arguments);
}
function runFindQuery(_x, _x2, _x3) {
  return _runFindQuery.apply(this, arguments);
}
function _runFindQuery() {
  _runFindQuery = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee2(collection, query, options) {
    var col, cursor, result;
    return _regenerator().w(function (_context2) {
      while (1) switch (_context2.n) {
        case 0:
          // await client.connect();
          // const database = client.db("libraryDB");
          col = database.collection(collection);
          cursor = col.find(query, options);
          _context2.n = 1;
          return cursor.toArray();
        case 1:
          result = _context2.v;
          return _context2.a(2, result);
      }
    }, _callee2);
  }));
  return _runFindQuery.apply(this, arguments);
}
function runInsertQuery(_x4, _x5) {
  return _runInsertQuery.apply(this, arguments);
}
function _runInsertQuery() {
  _runInsertQuery = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee3(collection, document) {
    var col, result;
    return _regenerator().w(function (_context3) {
      while (1) switch (_context3.n) {
        case 0:
          // await client.connect();
          // const database = client.db("libraryDB");
          col = database.collection(collection);
          _context3.n = 1;
          return col.insertOne(document);
        case 1:
          result = _context3.v;
          return _context3.a(2, result);
      }
    }, _callee3);
  }));
  return _runInsertQuery.apply(this, arguments);
}
function runUpdateQuery(_x6, _x7, _x8) {
  return _runUpdateQuery.apply(this, arguments);
} // async function runUpdateQuery(collection, filter, update) {
//     // await client.connect();
//     // const database = client.db("libraryDB");
//     const col = database.collection(collection);
//     // --- DEBUGGING ADDITION ---
//     console.log(`[DB UPDATE] Attempting to update collection: ${collection}`);
//     console.log(`[DB UPDATE] Filter:`, filter);
//     console.log(`[DB UPDATE] Update Object:`, update);
//     // --------------------------
//     const result = await col.updateOne(filter, update);
//     // await client.close();
//     return result;
// }
function _runUpdateQuery() {
  _runUpdateQuery = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee4(collection, filter, update) {
    var col, result;
    return _regenerator().w(function (_context4) {
      while (1) switch (_context4.n) {
        case 0:
          // await client.connect();
          // const database = client.db("libraryDB");
          col = database.collection(collection);
          _context4.n = 1;
          return col.updateOne(filter, update);
        case 1:
          result = _context4.v;
          return _context4.a(2, result);
      }
    }, _callee4);
  }));
  return _runUpdateQuery.apply(this, arguments);
}
function runDeleteQuery(_x9, _x0) {
  return _runDeleteQuery.apply(this, arguments);
}
function _runDeleteQuery() {
  _runDeleteQuery = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee5(collection, filter) {
    var col, result;
    return _regenerator().w(function (_context5) {
      while (1) switch (_context5.n) {
        case 0:
          // await client.connect();
          // const database = client.db("libraryDB");
          col = database.collection(collection);
          _context5.n = 1;
          return col.deleteOne(filter);
        case 1:
          result = _context5.v;
          return _context5.a(2, result);
      }
    }, _callee5);
  }));
  return _runDeleteQuery.apply(this, arguments);
}
module.exports = {
  runFindQuery: runFindQuery,
  runInsertQuery: runInsertQuery,
  runUpdateQuery: runUpdateQuery,
  runDeleteQuery: runDeleteQuery,
  dbConnect: dbConnect
};