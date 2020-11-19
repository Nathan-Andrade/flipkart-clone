const express = require('express');
const { singnup } = require('../controller/user');
const router = express.Router();


router.post('/singup', singnup);

router.post('/singin', (req, res) => {
  
});

module.exports = router;