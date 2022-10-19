/* eslint-disable */
const express = require('express');

const router = express.Router();

const {
	__addReplay,
	__deleteReplay,
	__getReplay,
	__updateReplay
  } = require("../../controller/replayCRUD.js");
  

router.get("/", __getReplay);
router.delete("/deleteReplay/:id", __deleteReplay);
router.post("/addReplay", __addReplay);
router.put("/updateReplay/:id", __updateReplay);

module.exports = router;