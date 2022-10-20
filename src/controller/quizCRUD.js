/* eslint-disable*/
const { QuestionsDB,QuizDB } = require("../models");

const __addQuiz = async (req, res, next) => {
  
    try {
        
      let createdQuiz = await QuizDB.create({...req.body,courseID:req.course.id});
      res.status(201).json(createdQuiz);
    } catch (err) {
      next(`Error inside addCourse function : ${err}`);
    }
  };

  const __deleteQuiz = async (req, res, next) => {
    try {
      let id = req.params.id;
      let deletedQuiz= await QuizDB.destroy({ where: { id } });
      res.status(202).json({item: deletedQuiz})
    } catch (err) {
      console.log("error in delete ~ err", err)
      
      next(`Error inside deleteOneQuiz function : ${err}`);
    }
  };

const __getQuiz = async (req, res, next) => {

  try {
    const quizes = await QuizDB.findAll({
      // include: [
      //   {
      //     model: QuestionsDB,
        
      //   },
      // ],
    });
    const quizData=  quizes.map((item,idx)=>{
        return {
          id : item.id,
          text:item.text
        }
      })
    res.quizes = quizData;
    res.status(200).json({quizData});
    return;
  } catch (error) {
    next({message:`Error happend in get quiz ${error}`})
  }
};

module.exports = {
  __addQuiz,
  __deleteQuiz,
  __getQuiz,
};
