const express = require('express');
const {  CommentDB } = require('../../models');
const router = express.Router();



router.post('/',async (req, res,next) =>{
    try {
      
      const commentData = {
        id: req.body.id,
        text: req.body.text,
        
      }
      let createdComment = await CommentDB.create(commentData);
      res.status(201).json(createdComment);
    } catch (err) {
      next(`Error inside addComment function : ${err}`);
    }
  });
  
  module.exports = router;