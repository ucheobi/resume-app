const express = require('express');
const router = express.Router();

const { create, resumeId, read, update, remove } = require('../controllers/user-data');
const { userId } = require('../controllers/user');
const { requireSignin, isAuth } = require('../controllers/auth');


router.get('/resume/:resumeId', read)
router.post('/resume/create/:userId', requireSignin, isAuth, create);
router.put('/resume/:resumeId/:userId', requireSignin, isAuth, update)
router.delete('/resume/:resumeId/:userId', requireSignin, isAuth, remove)

router.param('userId', userId);
router.param('resumeId', resumeId)


module.exports = router;