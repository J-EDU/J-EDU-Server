/* eslint-disable*/
const { quizCollection, QuestionDB, OptionDB } = require("../../models");

const __addQuiz = async (req, res, next) => {
  try {
    
    let createdQuiz = await quizCollection.CREATE({...req.body})
    res.status(201).json(createdQuiz);
  } catch (err) {
    next(`Error QuizCRUD.js ~ line 11 : ${err}`);
  }
};

const __deleteQuiz = async (req, res, next) => {
  try {
    let id = req.params.id;
    let deletedQuiz= await quizCollection.DELETE(id)
    if(deletedQuiz)
    return res.status(200).json({msg:"Ok"});
    return res.status(404).json({msg:"No Quiz"});
  
  } catch (err) {
    next(`Error QuizCRUD.js ~ line 24 : ${err}`);
  }
};

const __updateQuiz = async (req, res, next) => {
	try {
		let id = req.params.id;
		let newQuizData = req.body;  
	let one = 	await quizCollection.UPDATE(id,newQuizData);
		let Quiz = await quizCollection.READ_ONE(id,
      [
        {
          model: QuestionDB,
          include: [{ model: OptionDB }],
        },
      ]
      )
    if(Quiz)
    return res.status(200).json({one});
    return res.status(201).json({msg : "there is no Quizs"});
	} catch (err) {
    next(` QuizCRUD.js ~ line 44  ${err}`)

	}
};

const __getQuizs = async (req, res, next) => {

  try {
    const Quizs = await quizCollection.READ_ALL(
         [
        {
          model: QuestionDB,
          include: [{ model: OptionDB }],
        },
      ]
    )
    if(Quizs)
      return res.status(200).json({Quizs});
      return res.status(201).json({msg : "there is no Quizs"});
  
  } catch (err) {
    next(` QuizCRUD.js ~ line 65  ${err}`)
  }
};

module.exports = {
  __addQuiz,
  __deleteQuiz,
  __updateQuiz,
  __getQuizs
};
