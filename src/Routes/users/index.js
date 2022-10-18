/* eslint-disable*/
const express = require('express');
const __getAllUser = require("./__getAllUsers")
const __signup = require("./__signup")
const __login = require("./__login")
const __updatePassword = require("./__updatePassword")
const __updateUser = require("./__updateUser")
const __getAllStudent = require("./__getAllStudent")
const __getAllTeachers= require("./__getAllTeachers")
const __getallBlocked = require("./__getallBlocked")

const  __checkRegx  = require('./__checkRegx');
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
router.use('/signup',__checkRegx,__signup );
router.use('/login',__isBlocked,__login );
router.use('/getAllStudent',__getAllStudent );
router.use('/updateUser',__isBlocked ,___isAuth,__updateUser );
router.use('/getAllTeachers',___isAuth,___isTeacher,__getAllTeachers);
router.use('/getAllBlocked',__getallBlocked);
router.use('/updatepassword',__updatePassword );



module.exports = router;
