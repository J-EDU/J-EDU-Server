/* eslint-disable*/
const express = require('express');
const __getAllVideos = require("./__getAllVideos")

const router = express.Router();

router.get('/',(req,res)=>{
    res.json({
        message : 'Video Home'
    })
} );
router.use('/getallvideos',__getAllVideos );




module.exports = router;