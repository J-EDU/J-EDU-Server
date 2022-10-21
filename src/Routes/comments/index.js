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
router.delete("/deleteComment/:id",__isBlocked,___isAuth,__deleteComment);
router.post("/addComment",__isBlocked,___isAuth,__addComment);
router.put("/updatecomment/:id",__isBlocked,___isAuth,__updateComment);

module.exports = router;
