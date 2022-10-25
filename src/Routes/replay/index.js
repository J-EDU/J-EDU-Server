/* eslint-disable */
const express = require('express');
const __isAdmin=require('../../middlewares/__userMiddlewares/__isAdmin')

const router = express.Router();

const {
	__addReplay,
	__deleteReplay,
	__getReplay,
	__updateReplay
  } = require("../../controller/replayCRUD.js");
  

router.get("/", __getReplay);
router.delete("/deleteReplay/:id",__isAdmin, __deleteReplay);
router.post("/addReplay", __isAdmin,__addReplay);
router.put("/updateReplay/:id",__isAdmin, __updateReplay);

module.exports = router;