/* eslint-disable*/

const { CommentDB } = require("../models");


const __addComment = async (req, res, next) => {
  try {
    const commentData = {
      userID: req.user.id,
      videoID: req.body.videoID,
      text: req.body.text,
    };
    try {
      let createdComment = await CommentDB.create(commentData);
      res.status(201).json(createdComment);
    } catch (error) {
      res.status(404).json({ msg: error.parent.detail });
      console.log("Catch", error);
    }
  } catch (err) {
    console.log("Hassan ~ err", err);
    next(`Error inside addComment function : ${err}`);
  }
};

const __deleteComment = async (req, res, next) => {
  try {
    let id = req.params.id;
    let deletedComment = await CommentDB.destroy({ where: { id } });
    res.status(202).json({ item: deletedComment });
  } catch (err) {
    console.log("Hassan ~ err", err);

    next(`Error inside deleteOneComment function : ${err}`);
  }
};

const __getComment = async (req, res, next) => {
  try {
    const comments = await CommentDB.findAll();
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
  } catch (error) {
    next({ message: `Error happend in getAllComments ${error}` });
  }
};

const __updateComment = async (req, res, next) => {
  try {
    let id = req.params.id;
    let newComment = req.body;
    await CommentDB.update(newComment, { where: { id } });
    let updateComment = await CommentDB.findOne({ where: { id: id } });
    let addco = await updateComment.update(newComment);
    res.status(202).json({ addco });
  } catch (err) {
    console.log("fawzi ~ err", err);

    next(`Error inside updatecomments function : ${err}`);
  }
};

module.exports = {
  __addComment,
  __deleteComment,
  __getComment,
  __updateComment
};
