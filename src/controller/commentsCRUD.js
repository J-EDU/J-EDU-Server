/* eslint-disable*/

const {commentCollection} = require("../models");


const __addComment = async (req, res, next) => {
    try {
      const commentData = {
        userID: req.user.id,
        videoID: req.body.videoID,
        text: req.body.text,
      };
      let createdComment = await commentCollection.CREATE(commentData);
      res.status(200).json(createdComment);
    } catch (err) {
      next(`commentsCRUD.js ~ line 16 ${err}`);
    }
};

const __deleteComment = async (req, res, next) => {
  try {
    let id = req.params.id;
    let deletedComment = await commentCollection.DELETE(id);
    if(deletedComment)
      return res.status(200).json({msg:"Ok"});
      return res.status(404).json({msg:"No Comment"});
    
  } catch (err) {
    next(`commentsCRUD.js ~ line 30  ${err}`);
  }
};

const __getComment = async (req, res, next) => {
  try {
    const comments = await commentCollection.READ_ALL();
    const commentData = comments.map((item, idx) => {
      return {
        id: item.id,
        text: item.text,
        videoID : item.videoID
      };
    });
    res.comments = commentData;
    res.status(200).json({ commentData });
    return;
  } catch (err) {
    next(`commentsCRUD.js ~ line 48 ${err}`);
  }
};

const __updateComment = async (req, res, next) => {
  try {
    const id = req.params.id;
    const newComment = req.body;
    const updated = await commentCollection.UPDATE(id,newComment)
    if(updated)
     return res.status(200).json({ updated });
     return res.status(404).json({ msg : "there is no Comment" });
  } catch (err) {
   next(`commentsCRUD.js ~ line 61${err}`);
  }
};

module.exports = {
  __addComment,
  __deleteComment,
  __getComment,
  __updateComment
};
