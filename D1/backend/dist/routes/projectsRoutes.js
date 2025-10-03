"use strict";

function _regenerator() { /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */ var e, t, r = "function" == typeof Symbol ? Symbol : {}, n = r.iterator || "@@iterator", o = r.toStringTag || "@@toStringTag"; function i(r, n, o, i) { var c = n && n.prototype instanceof Generator ? n : Generator, u = Object.create(c.prototype); return _regeneratorDefine2(u, "_invoke", function (r, n, o) { var i, c, u, f = 0, p = o || [], y = !1, G = { p: 0, n: 0, v: e, a: d, f: d.bind(e, 4), d: function d(t, r) { return i = t, c = 0, u = e, G.n = r, a; } }; function d(r, n) { for (c = r, u = n, t = 0; !y && f && !o && t < p.length; t++) { var o, i = p[t], d = G.p, l = i[2]; r > 3 ? (o = l === n) && (u = i[(c = i[4]) ? 5 : (c = 3, 3)], i[4] = i[5] = e) : i[0] <= d && ((o = r < 2 && d < i[1]) ? (c = 0, G.v = n, G.n = i[1]) : d < l && (o = r < 3 || i[0] > n || n > l) && (i[4] = r, i[5] = n, G.n = l, c = 0)); } if (o || r > 1) return a; throw y = !0, n; } return function (o, p, l) { if (f > 1) throw TypeError("Generator is already running"); for (y && 1 === p && d(p, l), c = p, u = l; (t = c < 2 ? e : u) || !y;) { i || (c ? c < 3 ? (c > 1 && (G.n = -1), d(c, u)) : G.n = u : G.v = u); try { if (f = 2, i) { if (c || (o = "next"), t = i[o]) { if (!(t = t.call(i, u))) throw TypeError("iterator result is not an object"); if (!t.done) return t; u = t.value, c < 2 && (c = 0); } else 1 === c && (t = i["return"]) && t.call(i), c < 2 && (u = TypeError("The iterator does not provide a '" + o + "' method"), c = 1); i = e; } else if ((t = (y = G.n < 0) ? u : r.call(n, G)) !== a) break; } catch (t) { i = e, c = 1, u = t; } finally { f = 1; } } return { value: t, done: y }; }; }(r, o, i), !0), u; } var a = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} t = Object.getPrototypeOf; var c = [][n] ? t(t([][n]())) : (_regeneratorDefine2(t = {}, n, function () { return this; }), t), u = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(c); function f(e) { return Object.setPrototypeOf ? Object.setPrototypeOf(e, GeneratorFunctionPrototype) : (e.__proto__ = GeneratorFunctionPrototype, _regeneratorDefine2(e, o, "GeneratorFunction")), e.prototype = Object.create(u), e; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, _regeneratorDefine2(u, "constructor", GeneratorFunctionPrototype), _regeneratorDefine2(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = "GeneratorFunction", _regeneratorDefine2(GeneratorFunctionPrototype, o, "GeneratorFunction"), _regeneratorDefine2(u), _regeneratorDefine2(u, o, "Generator"), _regeneratorDefine2(u, n, function () { return this; }), _regeneratorDefine2(u, "toString", function () { return "[object Generator]"; }), (_regenerator = function _regenerator() { return { w: i, m: f }; })(); }
function _regeneratorDefine2(e, r, n, t) { var i = Object.defineProperty; try { i({}, "", {}); } catch (e) { i = 0; } _regeneratorDefine2 = function _regeneratorDefine(e, r, n, t) { function o(r, n) { _regeneratorDefine2(e, r, function (e) { return this._invoke(r, n, e); }); } r ? i ? i(e, r, { value: n, enumerable: !t, configurable: !t, writable: !t }) : e[r] = n : (o("next", 0), o("throw", 1), o("return", 2)); }, _regeneratorDefine2(e, r, n, t); }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }
var express = require("express");
var _require = require("../models/projectsModel"),
  getProjects = _require.getProjects,
  getUserProjects = _require.getUserProjects,
  getProjectById = _require.getProjectById,
  addProject = _require.addProject,
  updateProject = _require.updateProject,
  checkOutProject = _require.checkOutProject,
  checkInProject = _require.checkInProject,
  addProjectMember = _require.addProjectMember,
  removeProjectMember = _require.removeProjectMember,
  getNextProjectId = _require.getNextProjectId,
  removeProject = _require.removeProject,
  updateProjectImage = _require.updateProjectImage,
  leaveProject = _require.leaveProject;
var _require2 = require("../models/usersModel"),
  getUserById = _require2.getUserById,
  addUserProject = _require2.addUserProject,
  removeUserProject = _require2.removeUserProject;
var router = express.Router();
var _require3 = require("../utils/fileUploads"),
  uploadImage = _require3.uploadImage,
  uploadFile = _require3.uploadFile;
var multer = require("multer");
var path = require("path");
var fs = require("fs");

// get all projects
router.get("/", /*#__PURE__*/function () {
  var _ref = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee(req, res) {
    var projects, _t;
    return _regenerator().w(function (_context) {
      while (1) switch (_context.p = _context.n) {
        case 0:
          _context.p = 0;
          _context.n = 1;
          return getProjects();
        case 1:
          projects = _context.v;
          res.json(projects);
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

// get user projects (home)
router.get("/user", /*#__PURE__*/function () {
  var _ref2 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee2(req, res) {
    var idString, id, user, projects, _t2;
    return _regenerator().w(function (_context2) {
      while (1) switch (_context2.p = _context2.n) {
        case 0:
          _context2.p = 0;
          // get id from local storage
          idString = req.query.id; // for testing
          id = Number(idString);
          if (id) {
            _context2.n = 1;
            break;
          }
          return _context2.a(2, res.status(400).json({
            success: false,
            message: "Missing logged in user id"
          }));
        case 1:
          _context2.n = 2;
          return getUserById(id);
        case 2:
          user = _context2.v;
          if (user) {
            _context2.n = 3;
            break;
          }
          return _context2.a(2, res.status(404).json({
            success: false,
            message: "User not found"
          }));
        case 3:
          _context2.n = 4;
          return getUserProjects(id);
        case 4:
          projects = _context2.v;
          res.json({
            success: true,
            projects: projects
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
    }, _callee2, null, [[0, 5]]);
  }));
  return function (_x3, _x4) {
    return _ref2.apply(this, arguments);
  };
}());

// get project
router.get("/:id", /*#__PURE__*/function () {
  var _ref3 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee3(req, res) {
    var id, project, _t3;
    return _regenerator().w(function (_context3) {
      while (1) switch (_context3.p = _context3.n) {
        case 0:
          _context3.p = 0;
          // get id from local storage
          id = req.params.id; // for testing
          _context3.n = 1;
          return getProjectById(Number(id));
        case 1:
          project = _context3.v;
          if (project) {
            _context3.n = 2;
            break;
          }
          return _context3.a(2, res.status(401).json({
            success: false,
            message: "Invalid Project Id"
          }));
        case 2:
          res.json({
            success: true,
            message: "Retrieved Project successfully",
            project: project
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

// update project
router.put("/:id", /*#__PURE__*/function () {
  var _ref4 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee4(req, res) {
    var idNum, updates, project, _t4;
    return _regenerator().w(function (_context4) {
      while (1) switch (_context4.p = _context4.n) {
        case 0:
          idNum = parseInt(req.params.id);
          updates = req.body.updates;
          _context4.p = 1;
          _context4.n = 2;
          return updateProject(idNum, updates);
        case 2:
          project = _context4.v;
          if (project) {
            _context4.n = 3;
            break;
          }
          return _context4.a(2, res.status(401).json({
            success: false,
            message: "Invalid Project Id"
          }));
        case 3:
          res.json({
            success: true,
            message: "Project Updated Successfully",
            project: project
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

// update project image
router.patch("/projectImage", uploadImage.single("image"), /*#__PURE__*/function () {
  var _ref5 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee5(req, res) {
    var idNum, id, imagePath, project, _t5;
    return _regenerator().w(function (_context5) {
      while (1) switch (_context5.p = _context5.n) {
        case 0:
          // console.log("Test");
          // return res.status(401).json({
          //                 success: false,
          //                 message: "Invalid Project Idsssss" 
          //             });
          idNum = req.body.idNum;
          id = parseInt(idNum);
          imagePath = "/assets/images/".concat(req.file.filename);
          console.log("routes: " + imagePath);
          if (!(isNaN(id) || !imagePath)) {
            _context5.n = 1;
            break;
          }
          return _context5.a(2, res.status(400).json({
            success: false,
            message: "Invalid ID or missing image path."
          }));
        case 1:
          _context5.p = 1;
          _context5.n = 2;
          return updateProjectImage(id, imagePath);
        case 2:
          project = _context5.v;
          if (!(!project || project.id != id)) {
            _context5.n = 3;
            break;
          }
          return _context5.a(2, res.status(401).json({
            success: false,
            message: "Invalid Project Id"
          }));
        case 3:
          res.json({
            success: true,
            message: "Project Image Updated Successfully",
            project: project
          });
          _context5.n = 5;
          break;
        case 4:
          _context5.p = 4;
          _t5 = _context5.v;
          console.log(_t5);
          res.status(500).json({
            error: _t5.message
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

// leave a project
router.post("/leave/:projectId", /*#__PURE__*/function () {
  var _ref6 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee6(req, res) {
    var projectId, userId, _t6;
    return _regenerator().w(function (_context6) {
      while (1) switch (_context6.p = _context6.n) {
        case 0:
          projectId = parseInt(req.params.projectId);
          userId = req.body.userId;
          _context6.p = 1;
          _context6.n = 2;
          return leaveProject(userId, projectId);
        case 2:
          res.json({
            success: true,
            message: "You have left the project successfully"
          });
          _context6.n = 4;
          break;
        case 3:
          _context6.p = 3;
          _t6 = _context6.v;
          res.status(500).json({
            success: false,
            message: _t6.message
          });
        case 4:
          return _context6.a(2);
      }
    }, _callee6, null, [[1, 3]]);
  }));
  return function (_x1, _x10) {
    return _ref6.apply(this, arguments);
  };
}());

// check in project
router.put("/checkIn/:id", /*#__PURE__*/function () {
  var _ref7 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee7(req, res) {
    var idNum, _req$body, userId, message, project, checkIn, _t7;
    return _regenerator().w(function (_context7) {
      while (1) switch (_context7.p = _context7.n) {
        case 0:
          idNum = parseInt(req.params.id);
          _req$body = req.body, userId = _req$body.userId, message = _req$body.message;
          _context7.p = 1;
          _context7.n = 2;
          return getProjectById(idNum);
        case 2:
          project = _context7.v;
          if (project) {
            _context7.n = 3;
            break;
          }
          return _context7.a(2, res.status(401).json({
            success: false,
            message: "Invalid Project Id"
          }));
        case 3:
          if (!(project.checkedOutBy != userId)) {
            _context7.n = 4;
            break;
          }
          return _context7.a(2, res.status(401).json({
            success: false,
            message: "User did not check this project out"
          }));
        case 4:
          _context7.n = 5;
          return checkInProject(idNum, userId, message);
        case 5:
          checkIn = _context7.v;
          res.json({
            success: true,
            message: "Project ".concat(project.name, " Checked in Successfully by ").concat(userId),
            checkIn: checkIn
          });
          _context7.n = 7;
          break;
        case 6:
          _context7.p = 6;
          _t7 = _context7.v;
          res.status(500).json({
            error: _t7.message
          });
        case 7:
          return _context7.a(2);
      }
    }, _callee7, null, [[1, 6]]);
  }));
  return function (_x11, _x12) {
    return _ref7.apply(this, arguments);
  };
}());

// check out project
router.put("/checkOut/:id", /*#__PURE__*/function () {
  var _ref8 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee8(req, res) {
    var idNum, _req$body2, userId, message, project, checkOut, _t8;
    return _regenerator().w(function (_context8) {
      while (1) switch (_context8.p = _context8.n) {
        case 0:
          idNum = parseInt(req.params.id);
          _req$body2 = req.body, userId = _req$body2.userId, message = _req$body2.message;
          _context8.p = 1;
          _context8.n = 2;
          return getProjectById(idNum);
        case 2:
          project = _context8.v;
          if (project) {
            _context8.n = 3;
            break;
          }
          return _context8.a(2, res.status(401).json({
            success: false,
            message: "Invalid Project Id"
          }));
        case 3:
          if (!(project.checkedOutBy != null)) {
            _context8.n = 4;
            break;
          }
          return _context8.a(2, res.status(401).json({
            success: false,
            message: "Project is already checked out"
          }));
        case 4:
          _context8.n = 5;
          return checkOutProject(idNum, userId, message);
        case 5:
          checkOut = _context8.v;
          res.json({
            success: true,
            message: "Project ".concat(project.name, " Checked Out Successfully by ").concat(userId),
            checkOut: checkOut
          });
          _context8.n = 7;
          break;
        case 6:
          _context8.p = 6;
          _t8 = _context8.v;
          // console.log(err)

          res.status(500).json({
            error: _t8.message
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

// add a user as memmber to project
router.put("/addMember/:id", /*#__PURE__*/function () {
  var _ref9 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee9(req, res) {
    var idNum, _req$body3, addedMemberId, addingMemberId, project, addedMember, addedProject, _t9;
    return _regenerator().w(function (_context9) {
      while (1) switch (_context9.p = _context9.n) {
        case 0:
          idNum = parseInt(req.params.id);
          _req$body3 = req.body, addedMemberId = _req$body3.addedMemberId, addingMemberId = _req$body3.addingMemberId;
          _context9.p = 1;
          _context9.n = 2;
          return getProjectById(idNum);
        case 2:
          project = _context9.v;
          if (project) {
            _context9.n = 3;
            break;
          }
          return _context9.a(2, res.status(401).json({
            success: false,
            message: "Project not found"
          }));
        case 3:
          if (project.members.includes(addingMemberId)) {
            _context9.n = 4;
            break;
          }
          return _context9.a(2, res.status(401).json({
            success: false,
            message: "You are not a member of this project, cannot add others"
          }));
        case 4:
          if (!project.members.includes(addedMemberId)) {
            _context9.n = 5;
            break;
          }
          return _context9.a(2, res.status(401).json({
            success: false,
            message: "User is already a member"
          }));
        case 5:
          _context9.n = 6;
          return addProjectMember(idNum, addedMemberId);
        case 6:
          addedMember = _context9.v;
          _context9.n = 7;
          return addUserProject(addedMemberId, idNum);
        case 7:
          addedProject = _context9.v;
          res.json({
            success: true,
            message: "Member ".concat(addingMemberId, " added user ").concat(addedMemberId, " successfully"),
            addedMember: addedMember
          });
          _context9.n = 9;
          break;
        case 8:
          _context9.p = 8;
          _t9 = _context9.v;
          res.status(500).json({
            error: _t9.message
          });
        case 9:
          return _context9.a(2);
      }
    }, _callee9, null, [[1, 8]]);
  }));
  return function (_x15, _x16) {
    return _ref9.apply(this, arguments);
  };
}());

// remove a user as memmber to project
router.put("/removeMember/:id", /*#__PURE__*/function () {
  var _ref0 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee0(req, res) {
    var idNum, _req$body4, removingMemberId, removedMemberId, project, removedMember, removedProject, _t0;
    return _regenerator().w(function (_context0) {
      while (1) switch (_context0.p = _context0.n) {
        case 0:
          idNum = parseInt(req.params.id);
          _req$body4 = req.body, removingMemberId = _req$body4.removingMemberId, removedMemberId = _req$body4.removedMemberId;
          _context0.p = 1;
          _context0.n = 2;
          return getProjectById(idNum);
        case 2:
          project = _context0.v;
          if (project) {
            _context0.n = 3;
            break;
          }
          return _context0.a(2, res.status(401).json({
            success: false,
            message: "Project not found"
          }));
        case 3:
          if (project.members.includes(removingMemberId)) {
            _context0.n = 4;
            break;
          }
          return _context0.a(2, res.status(401).json({
            success: false,
            message: "You are not a member of this project, cannot remove others"
          }));
        case 4:
          if (project.members.includes(removedMemberId)) {
            _context0.n = 5;
            break;
          }
          return _context0.a(2, res.status(401).json({
            success: false,
            message: "User is already not a member"
          }));
        case 5:
          _context0.n = 6;
          return removeProjectMember(idNum, removedMemberId);
        case 6:
          removedMember = _context0.v;
          _context0.n = 7;
          return removeUserProject(removedMemberId, idNum);
        case 7:
          removedProject = _context0.v;
          res.json({
            success: true,
            message: "Member ".concat(removingMemberId, " removed user ").concat(removedMemberId, " successfully"),
            removedMember: removedMember
          });
          _context0.n = 9;
          break;
        case 8:
          _context0.p = 8;
          _t0 = _context0.v;
          res.status(500).json({
            error: _t0.message
          });
        case 9:
          return _context0.a(2);
      }
    }, _callee0, null, [[1, 8]]);
  }));
  return function (_x17, _x18) {
    return _ref0.apply(this, arguments);
  };
}());

// add project
router.post("/", /*#__PURE__*/function () {
  var _ref1 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee1(req, res) {
    var _req$body5, name, languages, hashtags, version, type, description, userId, newProject, createdProject, _t1, _t10, _t11, _t12, _t13, _t14, _t15, _t16, _t17, _t18, _t19;
    return _regenerator().w(function (_context1) {
      while (1) switch (_context1.p = _context1.n) {
        case 0:
          _req$body5 = req.body, name = _req$body5.name, languages = _req$body5.languages, hashtags = _req$body5.hashtags, version = _req$body5.version, type = _req$body5.type, description = _req$body5.description, userId = _req$body5.userId;
          _context1.p = 1;
          _context1.n = 2;
          return getNextProjectId();
        case 2:
          _t1 = _context1.v;
          _t10 = name;
          _t11 = languages;
          _t12 = hashtags;
          _t13 = version;
          _t14 = type;
          _t15 = description;
          _t16 = [];
          _t17 = [];
          _t18 = [userId];
          newProject = {
            id: _t1,
            name: _t10,
            languages: _t11,
            hashtags: _t12,
            version: _t13,
            type: _t14,
            description: _t15,
            activities: _t16,
            files: _t17,
            status: "Checked In",
            members: _t18,
            checkedOutBy: null,
            projectImage: ""
          };
          _context1.n = 3;
          return addProject(newProject);
        case 3:
          createdProject = _context1.v;
          _context1.n = 4;
          return addUserProject(userId, newProject.id);
        case 4:
          // console.log("--------")
          // console.log(createdProject);

          res.json({
            success: true,
            message: "Project successfully added",
            createdProject: createdProject
          });
          _context1.n = 6;
          break;
        case 5:
          _context1.p = 5;
          _t19 = _context1.v;
          res.status(500).json({
            error: _t19.message
          });
        case 6:
          return _context1.a(2);
      }
    }, _callee1, null, [[1, 5]]);
  }));
  return function (_x19, _x20) {
    return _ref1.apply(this, arguments);
  };
}());

// remove project
router["delete"]("/:id", /*#__PURE__*/function () {
  var _ref10 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee10(req, res) {
    var idNum, project, deletedProject, _t20;
    return _regenerator().w(function (_context10) {
      while (1) switch (_context10.p = _context10.n) {
        case 0:
          idNum = parseInt(req.params.id);
          _context10.p = 1;
          _context10.n = 2;
          return getProjectById(idNum);
        case 2:
          project = _context10.v;
          if (project) {
            _context10.n = 3;
            break;
          }
          return _context10.a(2, res.status(401).json({
            success: false,
            message: "Project not found"
          }));
        case 3:
          _context10.n = 4;
          return removeProject(idNum);
        case 4:
          deletedProject = _context10.v;
          res.json({
            success: true,
            message: "Project successfully removed",
            deletedProject: deletedProject
          });
          _context10.n = 6;
          break;
        case 5:
          _context10.p = 5;
          _t20 = _context10.v;
          res.status(500).json({
            error: _t20.message
          });
        case 6:
          return _context10.a(2);
      }
    }, _callee10, null, [[1, 5]]);
  }));
  return function (_x21, _x22) {
    return _ref10.apply(this, arguments);
  };
}());
router.post("/uploadFiles/:id", uploadFile.array("files", 10), /*#__PURE__*/function () {
  var _ref11 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee11(req, res) {
    var idNum, project, fileNames, updatedFiles, updated, _t21;
    return _regenerator().w(function (_context11) {
      while (1) switch (_context11.p = _context11.n) {
        case 0:
          _context11.p = 0;
          idNum = parseInt(req.params.id);
          _context11.n = 1;
          return getProjectById(idNum);
        case 1:
          project = _context11.v;
          if (project) {
            _context11.n = 2;
            break;
          }
          return _context11.a(2, res.status(404).json({
            success: false,
            message: "Project not found"
          }));
        case 2:
          console.log("Uploaded files:", req.files);
          fileNames = req.files.map(function (f) {
            return f.filename;
          });
          updatedFiles = fileNames;
          _context11.n = 3;
          return updateProject(idNum, {
            files: updatedFiles
          });
        case 3:
          updated = _context11.v;
          res.json({
            success: true,
            message: "Files uploaded successfully",
            project: updated
          });
          _context11.n = 5;
          break;
        case 4:
          _context11.p = 4;
          _t21 = _context11.v;
          console.error("Upload error:", _t21);
          res.status(500).json({
            success: false,
            message: "Server error"
          });
        case 5:
          return _context11.a(2);
      }
    }, _callee11, null, [[0, 4]]);
  }));
  return function (_x23, _x24) {
    return _ref11.apply(this, arguments);
  };
}());
router.get("/downloadFile/:projectId/:filename", /*#__PURE__*/function () {
  var _ref12 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee12(req, res) {
    var _req$params, projectId, filename, filePath;
    return _regenerator().w(function (_context12) {
      while (1) switch (_context12.n) {
        case 0:
          _req$params = req.params, projectId = _req$params.projectId, filename = _req$params.filename;
          filePath = path.join(__dirname, "..", "public", "assets", "files", filename); // console.log("filepathssss: ")
          // console.log(filePath);
          if (fs.existsSync(filePath)) {
            _context12.n = 1;
            break;
          }
          console.log("nope");
          return _context12.a(2, res.status(404).json({
            success: false,
            message: "File not found"
          }));
        case 1:
          // console.log("filepath: ")
          // console.log(filePath);
          res.download(filePath);
        case 2:
          return _context12.a(2);
      }
    }, _callee12);
  }));
  return function (_x25, _x26) {
    return _ref12.apply(this, arguments);
  };
}());
module.exports = router;