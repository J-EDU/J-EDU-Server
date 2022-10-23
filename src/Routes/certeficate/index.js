/* eslint-disable */
const express = require("express");
const __getCertificate = require("../../middlewares/certificate/__certificate");

const router = express.Router();

router.post("/", __getCertificate);
// router.delete("/deleteComment/:id",__isBlocked,___isAuth,__deleteComment);
// router.post("/addComment",__isBlocked,___isAuth,__addComment);
// router.put("/updatecomment/:id",__isBlocked,___isAuth,__updateComment);

module.exports = router;
