/* eslint-disable*/

const { QuestionDB,QuizDB } = require("../models");


const __addQuestion = async (req, res, next) => {
  try {
    const QuestionData = {
      questinID: req.user.id,
      quizID: req.body.QuizDB,
      text: req.body.text,
    };
    try {
      let createdQuestion = await QuestionDB.create(QuestionData);
      res.status(201).json(createdQuestion);
    } catch (error) {
      res.status(404).json({ msg: error.parent.detail });
      console.log("Catch", error);
    }
  } catch (err) {
    console.log("ruba ~ err", err);
    next(`Error inside add Question function : ${err}`);
  }
};

const __deleteQuestion = async (req, res, next) => {
  try {
    let id = req.params.id;
    let deletedQuestion = await QuestionDB.destroy({ where: { id } });
    res.status(202).json({ item: deletedQuestion});
  } catch (err) {
    console.log("ruba ~ err", err);

    next(`Error inside delete One Question function : ${err}`);
  }
};

const __getQuestion = async (req, res, next) => {
  try {
    const question = await QuestionDB.findAll();
    const questionData = question.map((item, idx) => {
      return {
        id: item.id,
        text: item.text,
        quizID : item.quizID
      };
    });
    res.question = questionData;
    res.status(200).json({ questionData });
    return;
  } catch (error) {
    next({ message: `Error happend in getAllQuestion${error}` });
  }
};

const __updateQuestion = async (req, res, next) => {
  try {
    let id = req.params.id;
    let newQuestion = req.body;
    await QuestionDB.update(newQuestion, { where: { id } });
    let updateQuestion = await QuestionDB.findOne({ where: { id: id } });
    let addQuestion = await updateQuestion.update(newQuestion);
    res.status(202).json({ addQuestion });
  } catch (err) {
    console.log("ruba ~ err", err);

    next(`Error inside update Qestion function : ${err}`);
  }
};

module.exports = {
	__addQuestion,
	__getQuestion,
	__deleteQuestion,
	__updateQuestion,
};
