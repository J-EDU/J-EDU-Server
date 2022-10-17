/*eslint-disable */
const express = require("express");
const { VideosDB } = require("../../models");
const router = express.Router();

router.delete("/:id", async (req, res, next) => {
  try {
    let id = req.params.id;
    let deletevideo = await VideosDB.destroy({ where: { id } });
    res.status(202).json({iten: deletevideo})
  } catch (err) {
    next(`Error inside deleteVideo function : ${err}`);
  }
});

module.exports = router;
