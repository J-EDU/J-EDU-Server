/* eslint-disable*/
const { QuestionsDB,QuizDB } = require("../models");

const __addQuiz = async (req, res, next) => {
  
    try {
        
      let createdQuiz = await QuizDB.create({...req.body,userID:req.user.id});
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
    const quiz = await QuizDB.findAll({
      include: [
        {
          model: QuestionsDB,
        
        },
      ],
    });
    res.quiz = quiz;
    res.status(200).json({quiz});
    return;
  } catch (error) {
    bayan({message:`Error happend in get quiz ${error}`})
  }
};

module.exports = {
  __addQuiz,
  __deleteQuiz,
  __getQuiz,
};
