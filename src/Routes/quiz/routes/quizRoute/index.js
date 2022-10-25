/* eslint-disable*/
const express = require('express');
const { __getQuizs, __addQuiz, __deleteQuiz, __updateQuiz } = require('../../../../controller/quiz/quizCRUD');
const __isTeacher=require('../../../../middlewares/__userMiddlewares/__isTeacher')
const __isAuth = require('../../../../middlewares/__userMiddlewares/__isAuth');
const __isBlocked = require('../../../../middlewares/__userMiddlewares/__isBlocked');
const router = express.Router();

router.get('/',__isAuth, __isBlocked,__getQuizs );
router.post('/addQuiz',__isAuth,__isBlocked,__isTeacher,__addQuiz);
router.delete('/deleteQuiz/:id',__isAuth,__isBlocked,__isTeacher,__deleteQuiz );
router.put('/updateQuiz/:id',__isAuth,__isBlocked,__isTeacher,__updateQuiz );


module.exports = router;