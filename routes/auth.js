const express = require('express');
const router = express.Router();

const { register, signin, signout } = require('../controllers/auth');

const { validateUser } = require('../config/validateUser');

router.post('/register', validateUser, register);
router.post('/signin', signin )
router.get('/signout', signout)


module.exports = router;