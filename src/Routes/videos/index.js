/* eslint-disable*/
const express = require('express');
const __getAllVideos = require("./__getAllVideos")
const __addvideo = require("./__addvideo")
const __deleteVideo = require("./__deleteVideos")

const router = express.Router();

router.get('/',(req,res)=>{
    res.json({
        message : 'Video Home'
    })
} );
router.use('/getallvideos',__getAllVideos );
router.use('/addVideo',__addvideo );
router.use('/deleteVideo',__deleteVideo );


module.exports = router;