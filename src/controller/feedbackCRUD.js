/*eslint-disable*/
const { FeedbackDB, UsersDB, ReplayDB } = require("../models");


const __addFeedback= async (req, res, next) => {
    try {
      const feedbackData = {
        userID: req.user.id,
        text: req.body.text,
      };
      try {
        let createdFeedback = await FeedbackDB.create(feedbackData);
        res.status(201).json(createdFeedback);
      } catch (error) {
        res.status(404).json({ msg: error.parent.detail });
        console.log("Catch", error);
      }
    } catch (err) {
      console.log("Hassan ~ err", err);
      next(`Error inside addFeedback function : ${err}`);
    }
  };


  const __deleteFeedback = async (req, res, next) => {
    try {
      let id = req.params.id;
      let deletedFeedback = await FeedbackDB.destroy({ where: { id } });
      res.status(202).json({ item: deletedFeedback });
    } catch (err) {
      console.log("Hassan ~ err", err);
  
      next(`Error inside deleteFeedback function : ${err}`);
    }
  };


  const __getFeedback = async (req, res, next) => {
    try {
      const feedback = await FeedbackDB.findAll({
        include: [
          {
            model: ReplayDB,
          },
        ],
      });
    
      res.feedback = feedback;
      res.status(200).json({ feedback });
      return;
    } catch (error) {
      next({ message: `Error happend in getAllFeedback ${error}` });
    }
  };


  const __updateFeedback = async (req, res, next) => {
    try {
      let id = req.params.id;
      const { text } = req.body;
  
      let findFeedBack = await FeedbackDB.findOne({ where: {id } });
      let item =await FeedbackDB.update({ ...findFeedBack, text }, { where: { id } });
  
      res.status(200).json({ msg: item});
    } catch (err) {
      console.log("Text ~ err", err);
  
      next(`Error inside updatePassword function : ${err}`);
    }
  };




  module.exports = {
    __addFeedback,
    __deleteFeedback,
    __getFeedback,
    __updateFeedback
  };