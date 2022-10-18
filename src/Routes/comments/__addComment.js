/* eslint-disable*/
const express = require('express');
const {  CommentDB } = require('../../models');
const router = express.Router();


router.post('/',async (req, res,next) =>{
    
  try {
      const commentData = {
        userID: req.body.userID,
        text: req.body.text,
      }
      try {
        let createdComment = await CommentDB.create(commentData);
        res.status(201).json(createdComment);
      } catch (error) {
        res.status(404).json({msg:error.parent.detail});
        console.log("Catch", error)
      }
    } catch (err) {
      console.log("Hassan ~ err", err)
      next(`Error inside addComment function : ${err}`);
    }
  });
  
  module.exports = router;