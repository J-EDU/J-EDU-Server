/* eslint-disable */
const express = require('express');

const router = express.Router();

const {
    __addFeedback,
    __deleteFeedback,
    __updateFeedback,
    __getFeedback,
  } = require("../../controller/feedbackCRUD");
  

router.get("/", __getFeedback);
router.delete("/deleteFeedback/:id", __deleteFeedback);
router.post("/addFeedback", __addFeedback);
router.put("/updateFeedback/:id", __updateFeedback);

module.exports = router;