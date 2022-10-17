/* eslint-disable*/
const express = require('express');
const { CommentDB } = require('../../models');

const router = express.Router();

router.get('/',async (req, res,next) => {

    try {
      const comments = await CommentDB.findAll();
      const commentData=  comments.map((item,idx)=>{
        return {
          id : item.id,
          text : item.text
        }
      })
      res.comments = commentData;
      res.status(200).json({commentData});
      return;
    } catch (error) {
      next({message:`Error happend in getAllComments ${error}`})
    }
});


module.exports = router;