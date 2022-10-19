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
router.delete("/__deleteReplay/:id", __deleteReplay);
router.post("/__addReplay", __addReplay);
router.put("/__updateReplay/:id", __updateReplay);

module.exports = router;