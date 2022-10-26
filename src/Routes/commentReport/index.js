/* eslint-disable*/
const express = require('express');
const { __addCommentReport,__deleteCommentReport,__getCommentReports}= require("../../controller/commentReport.CRUD");
const __isAdmin = require('../../middlewares/__userMiddlewares/__isAdmin');
const __isAuth = require('../../middlewares/__userMiddlewares/__isAuth');
const router = express.Router();

router.get('/', __isAuth,__isAdmin, __getCommentReports );
router.post('/addCommentReport',__isAuth,__addCommentReport );
router.delete('/deleteCommentReport/:id',__isAuth,__isAdmin,__deleteCommentReport );


module.exports = router;