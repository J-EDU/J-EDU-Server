/* eslint-disable */
const express = require('express');
const __feedbackmessage = require("../../middlewares/__userMiddlewares/__feedbackMessage");
const __isAdmin = require('../../middlewares/__userMiddlewares/__isAdmin');
const __isAuth = require('../../middlewares/__userMiddlewares/__isAuth');
const router = express.Router();

const {
    __addFeedback,
    __deleteFeedback,
    __updateFeedback,
    __getFeedback,
  } = require("../../controller/feedbackCRUD");

  

router.get("/", __getFeedback);
router.delete("/deleteFeedback/:id",__isAuth,__isAdmin,__deleteFeedback);
router.post("/addFeedback",__feedbackmessage ,__addFeedback);
router.put("/updateFeedback/:id", __updateFeedback);

module.exports = router;