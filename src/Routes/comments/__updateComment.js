/* eslint-disable*/
const express = require('express');
const { CommentDB } = require('../../models');

const router = express.Router();

router.put('/:id',async (req, res,next) => {

    try {
        let id = req.params.id;
        let newComment=req.body;
        await CommentDB.update(newComment,{where:{id}});
        let updateComment= await CommentDB.findOne({ where: { id : id} });
        let addco= await updateComment.update(newComment);
        res.status(202).json({addco})
      } catch (err) {
        console.log("fawzi ~ err", err)
        
        next(`Error inside updatecomments function : ${err}`);
      }
    });


    module.exports = router;