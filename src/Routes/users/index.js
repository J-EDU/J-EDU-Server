/* eslint-disable*/
const express = require('express');
const __getAllUser = require("./__getAllUsers")

const router = express.Router();

router.get('/',(req,res)=>{
    res.json({
        message : 'User Home'
    })
} );
router.use('/getusers',__getAllUser );




module.exports = router;
