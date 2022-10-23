/* eslint-disable*/
const express = require('express');
const { __getQuizs, __addQuiz, __deleteQuiz, __updateQuiz } = require('../../../../controller/quiz/quizCRUD');

const router = express.Router();

router.get('/', __getQuizs );
router.post('/addQuiz',__addQuiz);
router.delete('/deleteQuiz/:id',__deleteQuiz );
router.put('/updateQuiz/:id',__updateQuiz );


module.exports = router;