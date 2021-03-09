const express = require('express');
const router = express.Router();

const { printPDF } = require('../controllers/printFile');
const { resumeId} = require('../controllers/user-data');


router.get('/resume/pdf', printPDF)
router.param('resumeId', resumeId)


module.exports = router;