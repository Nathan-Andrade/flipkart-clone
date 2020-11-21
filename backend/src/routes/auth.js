const express = require('express');
const { singnup, signin } = require('../controller/auth');
const router = express.Router();


router.post('/singup', singnup);

router.post('/singin', signin);

module.exports = router;