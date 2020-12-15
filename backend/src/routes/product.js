const express = require('express');
const { requireSignin, adminMiddleware } = require('../common-middleware');
//const { addCategory, getCategory } = require('../controller/category');
const { createProduct } = require('../controller/product');
const multer = require('multer');
const upload = multer({ dest: 'uploads/' })
const router = express.Router();

router.post('/product/create', requireSignin, adminMiddleware, upload.single('productPicture'), createProduct);
//router.get('/category/getcategory', getCategory);

module.exports = router;