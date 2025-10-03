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
// get all projects
function getProjects() {
  return _getProjects.apply(this, arguments);
} // get project by id
function _getProjects() {
  _getProjects = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee() {
    var users;
    return _regenerator().w(function (_context) {
      while (1) switch (_context.n) {
        case 0:
          _context.n = 1;
          return runFindQuery("projects");
        case 1:
          users = _context.v;
          return _context.a(2, users || null);
      }
    }, _callee);
  }));
  return _getProjects.apply(this, arguments);
}
function getProjectById(_x) {
  return _getProjectById.apply(this, arguments);
}
function _getProjectById() {
  _getProjectById = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee2(id) {
    var users;
    return _regenerator().w(function (_context2) {
      while (1) switch (_context2.n) {
        case 0:
          _context2.n = 1;
          return runFindQuery("projects", {
            id: id
          });
        case 1:
          users = _context2.v;
          return _context2.a(2, users[0] || null);
      }
    }, _callee2);
  }));
  return _getProjectById.apply(this, arguments);
}
function getUserProjects(_x2) {
  return _getUserProjects.apply(this, arguments);
} // Create
// Add a project
function _getUserProjects() {
  _getUserProjects = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee3(id) {
    return _regenerator().w(function (_context3) {
      while (1) switch (_context3.n) {
        case 0:
          _context3.n = 1;
          return runFindQuery("projects", {
            members: id
          });
        case 1:
          return _context3.a(2, _context3.v);
      }
    }, _callee3);
  }));
  return _getUserProjects.apply(this, arguments);
}
function addProject(_x3) {
  return _addProject.apply(this, arguments);
} // Update 
// Edit a project 
function _addProject() {
  _addProject = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee4(newProjects) {
    return _regenerator().w(function (_context4) {
      while (1) switch (_context4.n) {
        case 0:
          _context4.n = 1;
          return runInsertQuery("projects", newProjects);
        case 1:
          return _context4.a(2, _context4.v);
      }
    }, _callee4);
  }));
  return _addProject.apply(this, arguments);
}
function updateProject(_x4, _x5) {
  return _updateProject.apply(this, arguments);
} // leave a project
function _updateProject() {
  _updateProject = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee5(id, updates) {
    return _regenerator().w(function (_context5) {
      while (1) switch (_context5.n) {
        case 0:
          _context5.n = 1;
          return runUpdateQuery("projects", {
            id: id
          }, {
            $set: updates
          });
        case 1:
          return _context5.a(2, _context5.v);
      }
    }, _callee5);
  }));
  return _updateProject.apply(this, arguments);
}
function leaveProject(_x6, _x7) {
  return _leaveProject.apply(this, arguments);
} // check in
function _leaveProject() {
  _leaveProject = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee6(userId, projectId) {
    return _regenerator().w(function (_context6) {
      while (1) switch (_context6.n) {
        case 0:
          _context6.n = 1;
          return runUpdateQuery("users", {
            id: userId
          }, {
            $pull: {
              projects: projectId
            }
          });
        case 1:
          _context6.n = 2;
          return runUpdateQuery("projects", {
            id: projectId
          }, {
            $pull: {
              members: userId
            }
          });
        case 2:
          return _context6.a(2, _context6.v);
      }
    }, _callee6);
  }));
  return _leaveProject.apply(this, arguments);
}
function checkInProject(_x8, _x9, _x0) {
  return _checkInProject.apply(this, arguments);
} // // add activity
// async function addProjectActivity(id, updates) {
// //   return await runUpdateQuery("users", { id }, { $set: updates });
// }
// check out
function _checkInProject() {
  _checkInProject = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee7(projectId, userId, message) {
    var user, activity;
    return _regenerator().w(function (_context7) {
      while (1) switch (_context7.n) {
        case 0:
          _context7.n = 1;
          return runFindQuery("users", {
            id: userId
          });
        case 1:
          user = _context7.v;
          // make feed
          activity = {
            type: "Checked in",
            modifiedBy: user.username,
            comment: message
          }; // make check in 
          _context7.n = 2;
          return runUpdateQuery("projects", {
            id: projectId
          }, {
            $set: {
              status: "Checked In",
              checkedOutBy: null
            },
            $push: {
              activities: activity
            }
          });
        case 2:
          return _context7.a(2, _context7.v);
      }
    }, _callee7);
  }));
  return _checkInProject.apply(this, arguments);
}
function checkOutProject(_x1, _x10, _x11) {
  return _checkOutProject.apply(this, arguments);
} // add member
function _checkOutProject() {
  _checkOutProject = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee8(projectId, userId, message) {
    var user, activity;
    return _regenerator().w(function (_context8) {
      while (1) switch (_context8.n) {
        case 0:
          _context8.n = 1;
          return runFindQuery("users", {
            id: userId
          });
        case 1:
          user = _context8.v;
          // make feed
          activity = {
            type: "Checked out",
            modifiedBy: user.username,
            comment: message
          }; // make check out 
          _context8.n = 2;
          return runUpdateQuery("projects", {
            id: projectId
          }, {
            $set: {
              status: "Checked Out",
              checkedOutBy: userId
            },
            $push: {
              activities: activity
            }
          });
        case 2:
          return _context8.a(2, _context8.v);
      }
    }, _callee8);
  }));
  return _checkOutProject.apply(this, arguments);
}
function addProjectMember(_x12, _x13) {
  return _addProjectMember.apply(this, arguments);
} // remove member
function _addProjectMember() {
  _addProjectMember = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee9(projectId, AddedMemberId) {
    return _regenerator().w(function (_context9) {
      while (1) switch (_context9.n) {
        case 0:
          _context9.n = 1;
          return runUpdateQuery("projects", {
            id: projectId
          },
          // receiver

          {
            $addToSet: {
              members: AddedMemberId
            }
          });
        case 1:
          return _context9.a(2);
      }
    }, _callee9);
  }));
  return _addProjectMember.apply(this, arguments);
}
function removeProjectMember(_x14, _x15) {
  return _removeProjectMember.apply(this, arguments);
} // update project image
// Edit a project 
// async function updateProject(id, updates) {
//   return await runUpdateQuery("projects", { id }, { $set: updates });
// }
// Delete
// remove a project ? admin?
function _removeProjectMember() {
  _removeProjectMember = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee0(projectId, memberId) {
    return _regenerator().w(function (_context0) {
      while (1) switch (_context0.n) {
        case 0:
          _context0.n = 1;
          return runUpdateQuery("projects", {
            id: projectId
          },
          // receiver

          // remove from request and add to friends
          {
            $pull: {
              members: memberId
            }
          });
        case 1:
          return _context0.a(2);
      }
    }, _callee0);
  }));
  return _removeProjectMember.apply(this, arguments);
}
function removeProject(_x16) {
  return _removeProject.apply(this, arguments);
}
function _removeProject() {
  _removeProject = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee1(id) {
    return _regenerator().w(function (_context1) {
      while (1) switch (_context1.n) {
        case 0:
          _context1.n = 1;
          return runDeleteQuery("projects", {
            id: id
          });
        case 1:
          return _context1.a(2, _context1.v);
      }
    }, _callee1);
  }));
  return _removeProject.apply(this, arguments);
}
function getNextProjectId() {
  return _getNextProjectId.apply(this, arguments);
} // update project image
function _getNextProjectId() {
  _getNextProjectId = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee10() {
    var lastProject;
    return _regenerator().w(function (_context10) {
      while (1) switch (_context10.n) {
        case 0:
          _context10.n = 1;
          return runFindQuery("projects", {}, {
            sort: {
              id: -1
            },
            limit: 1
          });
        case 1:
          lastProject = _context10.v;
          if (lastProject.length) {
            _context10.n = 2;
            break;
          }
          return _context10.a(2, 1);
        case 2:
          ;
          return _context10.a(2, lastProject[0].id + 1);
      }
    }, _callee10);
  }));
  return _getNextProjectId.apply(this, arguments);
}
function updateProjectImage(_x17, _x18) {
  return _updateProjectImage.apply(this, arguments);
}
function _updateProjectImage() {
  _updateProjectImage = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee11(idNum, imagePath) {
    return _regenerator().w(function (_context11) {
      while (1) switch (_context11.n) {
        case 0:
          console.log("backend: " + imagePath);
          _context11.n = 1;
          return runUpdateQuery("projects",
          // change path of image
          {
            id: parseInt(idNum)
          }, {
            $set: {
              projectImage: imagePath
            }
          });
        case 1:
          _context11.n = 2;
          return getProjectById(idNum);
        case 2:
          return _context11.a(2, _context11.v);
      }
    }, _callee11);
  }));
  return _updateProjectImage.apply(this, arguments);
}
module.exports = {
  getProjects: getProjects,
  getProjectById: getProjectById,
  addProject: addProject,
  updateProject: updateProject,
  checkInProject: checkInProject,
  checkOutProject: checkOutProject,
  addProjectMember: addProjectMember,
  removeProjectMember: removeProjectMember,
  getUserProjects: getUserProjects,
  getNextProjectId: getNextProjectId,
  removeProject: removeProject,
  updateProjectImage: updateProjectImage,
  leaveProject: leaveProject
};