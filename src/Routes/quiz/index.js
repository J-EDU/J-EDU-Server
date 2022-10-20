/* eslint-disable */
const express = require('express');
const __isTeacher= require("../../middlewares/__userMiddlewares/__isTeacher")
const router = express.Router();

const {
    __addQuiz,
    __deleteQuiz,
    __getQuiz,
  } = require("../../controller/quizCRUD");
  

router.get("/", __getQuiz);
router.delete("/deleteQuiz/:id",__isTeacher, __deleteQuiz);
router.post("/addQuiz",__addQuiz);

module.exports = router;