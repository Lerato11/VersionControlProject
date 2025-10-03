"use strict";

var multer = require("multer");
var storage = multer.diskStorage({
  destination: function destination(req, file, cb) {
    cb(null, "frontend/public/assets/images");
  },
  filename: function filename(req, file, cb) {
    cb(null, Date.now() + "-" + file.originalname);
  }
});
var uploadImage = multer({
  storage: storage
});

// for project files
var fileStorage = multer.diskStorage({
  destination: function destination(req, file, cb) {
    cb(null, "backend/src/public/assets/files");
  },
  filename: function filename(req, file, cb) {
    cb(null, file.originalname);
  }
});
var uploadFile = multer({
  storage: fileStorage
});
module.exports = {
  uploadImage: uploadImage,
  uploadFile: uploadFile
};
;