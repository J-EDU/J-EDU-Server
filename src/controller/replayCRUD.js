/* eslint-disable*/

const { ReplayDB } = require("../models");


const __addReplay= async (req, res, next) => {
  try {
    const replayData = {
      userID: req.user.id,
      feedbackID: req.body.feedbackID,
      text: req.body.text,
    };
    try {
      let createdReplay = await ReplayDB.create(replayData);
      res.status(201).json(createdReplay);
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
    let deletedReplay = await ReplayDB.destroy({ where: { id } });
    res.status(202).json({ item: deletedReplay  });
  } catch (err) {
    console.log("Ruba ~ err", err);

    next(`Error inside delete Replay function : ${err}`);
  }
};

const __getReplay= async (req, res, next) => {
  try {
    const replaies = await ReplayDB.findAll();
    // const commentData = comments.map((item, idx) => {
    //   return {
    //     id: item.id,
    //     text: item.text,
    //   };
    // });
    // res.comments = commentData;
    res.status(200).json({ replaies });
    return;
  } catch (error) {
    next({ message: `Error happend in Get Replay ${error}` });
  }
};

const __updateReplay = async (req, res, next) => {
  try {
    let id = req.params.id;
    let {text} = req.body;
    let beforeUpdate = await ReplayDB.findOne({ where: { id } });
    await ReplayDB.update({...beforeUpdate , text}, { where: { id } });
    let afterUpdate = await ReplayDB.findOne({ where: { id } });
    res.status(202).json({ afterUpdate });
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
