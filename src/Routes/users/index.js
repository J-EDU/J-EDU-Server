/* eslint-disable*/
const express = require('express');

const {__signup,__login,__updatePassword,__updateUser}= require("../../controller/userAuthCRUD");
const {__getAllUsers,__getAllBlocked,__getAllStudent,__getAllTeacher}= require("../../controller/__user__info");
const __checkRegx  = require('../../middlewares/__userMiddlewares/__checkRegx');
const __isBlocked = require('../../middlewares/__userMiddlewares/__isBlocked');
const __isAdmin = require('../../middlewares/__userMiddlewares/__isAdmin');
const __isAuth = require('../../middlewares/__userMiddlewares/__isAuth');
const __makeBlock = require('../../middlewares/__userMiddlewares/__makeBlock');
const __makeAuth = require('../../middlewares/__userMiddlewares/__makeAuth');
const __uploadAvatar = require('../../middlewares/__userMiddlewares/__uploadAvatar');



const router = express.Router();

router.get('/',__isBlocked ,__isAuth,__isAdmin,__getAllUsers );
router.post('/signup',__checkRegx,__uploadAvatar,__signup );
router.post('/login',__isBlocked,__login );
router.put('/updateUser',__isBlocked ,__isAuth,__updateUser );
router.put('/updatepassword',__updatePassword );
router.get('/getAllTeachers',__isAuth,__getAllTeacher);
router.get('/getAllBlocked',__isBlocked ,__isAuth,__isAdmin,__getAllBlocked);
router.get('/getAllStudent',__isBlocked ,__isAuth,__isAdmin,__getAllStudent );
router.put('/makeBlock',__makeBlock );
router.put('/makeAuth',__makeAuth);



module.exports = router;
