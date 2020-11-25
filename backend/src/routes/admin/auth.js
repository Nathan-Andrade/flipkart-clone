const express = require('express');
const { singnup, signin, requireSignin } = require('../../controller/admin/auth');
const router = express.Router();


router.post('/admin/signup', singnup);
router.post('/admin/signin', signin);

module.exports = router;