/* eslint-disable */
const express = require("express");
const __getcertificate =require("../../middlewares/certificate/certificate.js")



const router = express.Router();

router.get("/", __getcertificate);


module.exports = router;
