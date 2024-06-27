const express = require('express');
const kanjiController = require('../controller/kanjiController');
const router = express.Router();

router.get('/find-kanji/:kanji' , kanjiController.findByKanji);
router.get('/find-grade/:grade',kanjiController.listByGrade);
module.exports =router;
