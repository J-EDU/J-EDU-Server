/* eslint-disable*/

const { CommentDB } = require("../models");


const __addReplay= async (req, res, next) => {
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
    console.log("Ruba ~ err", err);
    next(`Error inside Add Replayfunction : ${err}`);
  }
};

const __deleteReplay = async (req, res, next) => {
  try {
    let id = req.params.id;
    let deletedComment = await CommentDB.destroy({ where: { id } });
    res.status(202).json({ item: deletedComment });
  } catch (err) {
    console.log("Ruba ~ err", err);

    next(`Error inside delete Replay function : ${err}`);
  }
};

const __getReplay= async (req, res, next) => {
  try {
    const comments = await CommentDB.findAll();
    const commentData = comments.map((item, idx) => {
      return {
        id: item.id,
        text: item.text,
      };
    });
    res.comments = commentData;
    res.status(200).json({ commentData });
    return;
  } catch (error) {
    next({ message: `Error happend in Get Replay ${error}` });
  }
};

const __updateReplay = async (req, res, next) => {
  try {
    let id = req.params.id;
    let newComment = req.body;
    await CommentDB.update(newComment, { where: { id } });
    let updateComment = await CommentDB.findOne({ where: { id: id } });
    let addco = await updateComment.update(newComment);
    res.status(202).json({ addco });
  } catch (err) {
    console.log("Ruba ~ err", err);

    next(`Error inside Update Replay function : ${err}`);
  }
};

module.exports = {
	__addReplay,
	__deleteReplay,
	__getReplay,
	__updateReplay
};
