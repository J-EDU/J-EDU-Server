/* eslint-disable*/

const {AnnouncementDB} = require("../models");


const __addAnnouncement = async (req, res, next) => {
    try {
      const announceData = {
        userID: req.user.id,
        text: req.body.text,
      };
      let createdAnnounce = await AnnouncementDB.create(announceData);
      res.status(200).json(createdAnnounce);
    } catch (err) {
      next(`errror inside addAnnouncement function ${err}`);
    }
};

const __deleteAnnouncement = async (req, res, next) => {
  try {
    let id = req.params.id;
    let deletedAnnounce = await AnnouncementDB.destroy({ where: { id } });
    if(deletedAnnounce)
      return res.status(200).json({msg:"Ok"});
      return res.status(404).json({msg:"No Announcement"});
    
  } catch (err) {
    next(`error inside deleteAnnouncement function ${err}`);
  }
};

const __getAnnouncement = async (req, res, next) => {
  try {
    const announcement = await AnnouncementDB.findAll();
    const announceData = announcement.map((item, idx) => {
      return {
        id: item.id,
        text: item.text
        
      };
    });
    res.announcement = AnnouncementDB;
    res.status(200).json({ announceData });
    return;
  } catch (err) {
    next(`error inside getAnnouncement function ${err}`);
  }
};

const __updateAnnouncement = async (req, res, next) => {
  try {
    const id = req.params.id;
    const newAnnounce = req.body;
    const updated = await AnnouncementDB.update(newAnnounce,{ where: { id } })
    if(updated)
     return res.status(200).json({ updated });
     return res.status(404).json({ msg : "there is no announcement" });
  } catch (err) {
   next(`error inside updateAnnouncement function ${err}`);
  }
};

module.exports = {
  __addAnnouncement,
  __deleteAnnouncement,
  __getAnnouncement,
  __updateAnnouncement
};