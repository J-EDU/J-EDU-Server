/* eslint-disable */
const express = require("express");

const {
  __addComment,
  __deleteComment,
  __updateComment,
  __getComment,
} = require("../../controller/commentsCRUD");

const router = express.Router();

router.get("/", __getComment);
router.delete("/deleteComment/:id", __deleteComment);
router.post("/addComment", __addComment);
router.put("/updateComment/:id", __updateComment);

module.exports = router;
