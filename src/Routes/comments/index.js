/* eslint-disable */
const express = require("express");

const {
  __addComment,
  __deleteComment,
  __updateComment,
  __getComment,
} = require("../../controller/commentsCRUD");
const ___isAuth = require("../../middlewares/__userMiddlewares/__isAuth");
const __isBlocked = require("../../middlewares/__userMiddlewares/__isBlocked");

const router = express.Router();

router.get("/", __getComment);
router.delete("/deleteComment/:id",___isAuth,__isBlocked,__deleteComment);
router.post("/addComment",___isAuth,__isBlocked,__addComment);
router.put("/updatecomment/:id",___isAuth,__isBlocked,__updateComment);

module.exports = router;
