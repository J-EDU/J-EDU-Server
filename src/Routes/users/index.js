/* eslint-disable*/
const express = require('express');
const __getAllUser = require("./__getAllUsers")
const __signup = require("./__signup")
const __login = require("./__login")
const __getallBlocked = require("./__getallBlocked")

const router = express.Router();

router.get('/',(req,res)=>{
    res.json({
        message : 'User Home'
    })
} );
router.use('/getusers',__getAllUser );
router.use('/signup',__signup );
router.use('/login',__login );
router.use('/Blocked',__getallBlocked);



module.exports = router;
