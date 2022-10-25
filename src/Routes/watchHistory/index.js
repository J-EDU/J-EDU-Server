/* eslint-disable */
const express = require('express');

const router = express.Router();

const {__getWatchhistory, __addWatchhistory, __updateWatchhistory, __isCompleted} = require("../../controller/watchhistoryCRUD");
const ___isAuth = require('../../middlewares/__userMiddlewares/__isAuth');
  

router.get("/", __getWatchhistory);
router.get("/", __isCompleted);
router.post("/addWatchHistory",___isAuth, __addWatchhistory);
router.put("/updateWatchHistory/:id",___isAuth,__updateWatchhistory);

module.exports = router;