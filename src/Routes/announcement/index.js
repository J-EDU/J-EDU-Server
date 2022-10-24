/* eslint-disable */
const express = require("express");

const {
  __addAnnouncement,
  __getAnnouncement,
  __deleteAnnouncement,
} = require("../../controller/announcementCRUD");
const ___isAdmin = require("../../middlewares/__userMiddlewares/__isAdmin")

const router = express.Router();

router.get("/", __getAnnouncement);
router.delete("/deleteAnnouncement/:id",___isAdmin,__deleteAnnouncement);
router.post("/addAnnouncement",___isAdmin,__addAnnouncement);


module.exports = router;