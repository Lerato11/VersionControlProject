const multer = require("multer");

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "frontend/public/assets/images");
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + "-" + file.originalname);
  },
});

const uploadImage = multer({ storage });



// for project files
const fileStorage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "backend/src/public/assets/files");
  },
  filename: (req, file, cb) => {
    cb(null, file.originalname);
  }
});

const uploadFile = multer({ storage: fileStorage });


module.exports = { uploadImage, uploadFile };;
