const express = require('express');
const { singnup, signin, requireSignin } = require('../controller/auth');
const router = express.Router();


router.post('/singup', singnup);
router.post('/signin', signin);

//router.post('/profile', requireSignin, (req, res) => {
//  res.status(200).json({ user: 'profile' })
//})

module.exports = router;