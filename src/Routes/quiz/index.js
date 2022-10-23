/* eslint-disable*/
const express = require('express');
const ___isAuth = require('../../middlewares/__userMiddlewares/__isAuth');
const {__addFiles,__getFiles,__deleteFile}= require("../../controller/filesCRUD");
const __isBlocked = require('../../middlewares/__userMiddlewares/__isBlocked');
const quiz = require('../quiz/routes/quizRoute');
const question = require('../quiz/routes/questionRoute');
const option = require('../quiz/routes/optionRoute');

const router = express.Router();

router.use('/quiz', quiz);
router.use('/question',question );
router.use('/option',option)


module.exports = router;