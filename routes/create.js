const express = require("express");
const router = express.Router();
const multer = require('multer')
const upload = multer({ dest: 'uploads/' })

const path = require('path')

const appRootDir = path.dirname(require.main.filename).replace('/bin', '')

// const ArticleSchema = require("./article");

const storage = multer.diskStorage({
  destination(req, file, cb) {
    cb(null, path.join(appRootDir, 'public', 'img'))
  },
  filename(req, file, cb) {
    cb(null, `img-${Date.now()}${path.extname(file.originalname)}`)
  },
})

const uploadMulter = multer({
  storage,
  fileFilter(req, file, cb) {
    const filetypes = /jpeg|jpg|png|svg/
    const mimetype = filetypes.test(file.mimetype)
    const extname = filetypes.test(path.extname(file.originalname).toLowerCase())

    if (mimetype && extname) {
      return cb(null, true)
    }
    return cb(null, false)
  },
})

/* создание объявления */
router.get("/:id", function (req, res) {
  let newArticle = {
    nameAuto: req.body.value,
    carOwner: req.body.value,
    transmission: req.body.value,
    yearAuto: req.body.value,
    mileage: req.body.value,
    isActive: req.body.value,
  };
});

router.get("/", function (req, res) {
  res.render('create')
});

router.post('/new', uploadMulter.single('carImg'), function (req, res, next) {
  res.redirect('/');
})

module.exports = router;
