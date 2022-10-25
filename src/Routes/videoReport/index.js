/* eslint-disable*/
const express = require('express');
const {__getReports, __addReport, __deleteReport}= require("../../controller/VideoReportCRUD");
const __isAdmin = require('../../middlewares/__userMiddlewares/__isAdmin');
const __isAuth = require('../../middlewares/__userMiddlewares/__isAuth');
const router = express.Router();

router.get('/', __isAuth,__isAdmin, __getReports );
router.post('/addReport',__addReport );
router.delete('/deletereport/:id',__isAuth,__isAdmin,__deleteReport );


module.exports = router;