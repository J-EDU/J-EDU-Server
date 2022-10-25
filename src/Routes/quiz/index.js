/* eslint-disable*/
const express = require('express');
const quiz = require('../quiz/routes/quizRoute');
const question = require('../quiz/routes/questionRoute');
const option = require('../quiz/routes/optionRoute');

const router = express.Router();

router.use('/quiz', quiz);
router.use('/question',question );
router.use('/option',option)


module.exports = router;