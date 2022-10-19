/* eslint-disable*/
const express = require('express');
const {__getReports, __addReport, __deleteReport}= require("../../controller/VideoReportCRUD");

const router = express.Router();

router.get('/', __getReports );
router.post('/addReport',__addReport );
router.delete('/deletereport/:id',__deleteReport );


module.exports = router;