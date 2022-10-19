const { FeedbackDB } = require("../models");


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
      const feedback = await FeedbackDB.findAll();
      const feedbackData = feedback.map((item, idx) => {
        return {
          id: item.id,
          text: item.text,
        };
      });
      res.feedback = feedbacktData;
      res.status(200).json({ feedbackData });
      return;
    } catch (error) {
      next({ message: `Error happend in getAllFeedback ${error}` });
    }
  };


  const __updateFeedback = async (req, res, next) => {
    try {
      let id = req.params.id;
      let newFeedback = req.body;
      await FeedbackDB.update(newFeedback, { where: { id } });
      let updateFeedback = await FeedbackDB.findOne({ where: { id: id } });
      let addfe = await updateFeedback.update(newFeedback);
      res.status(202).json({ addfe });
    } catch (err) {
      console.log("fawzi ~ err", err);
  
      next(`Error inside updateFeedback function : ${err}`);
    }
  };




  module.exports = {
    __addFeedback,
    __deleteFeedback,
    __getFeedback,
    __updateFeedback
  };