/* eslint-disable*/
const express = require('express');
const __getAllUser = require("./__getAllUsers")
const __signup = require("./__signup")
const __login = require("./__login")

const __getAllTeachers= require("./__getAllTeachers")

const __getallBlocked = require("./__getallBlocked")
const __isBlocked = require('./__isBlocked');
const ___isAdmin = require('./__isAdmin');
const ___isAuth = require('./__isAuth');
const ___isTeacher = require('./__isTeacher');


const router = express.Router();

router.get('/',(req,res)=>{
    res.json({
        message : 'User Home'
    })
} );

router.use('/getusers',__isBlocked ,___isAuth,__getAllUser );
router.use('/signup',__signup );
router.use('/login',__isBlocked,__login );
router.use('/getAllTeachers',___isAuth,___isTeacher,__getAllTeachers);
router.use('/getAllBlocked',__getallBlocked);



module.exports = router;
