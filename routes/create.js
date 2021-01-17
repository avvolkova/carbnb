const express = require("express");
const router = express.Router();
const multer = require('multer')
const upload = multer({ dest: 'uploads/' })
const Article = require('../models/article')

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

router.get("/", function(req, res) {
    res.render('create')
});

router.post('/new', uploadMulter.single('carImg'), async function(req, res, next) {
    let newArticle = await new Article({
        city: req.body.city,
        carName: req.body.carName,
        productionYear: req.body.productionYear,
        img: `img-${Date.now()}`,
        isActive: true,
    })
    await newArticle.save();
    console.log(newArticle);
    res.redirect(`/service/${newArticle._id}`);
})

module.exports = router;