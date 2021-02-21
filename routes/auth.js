const express = require('express');
const router = express.Router();

const { signup } = require('../controllers/auth');

const { validateUser } = require('../config/validateUser');

router.post('/signup', validateUser, signup);


module.exports = router;