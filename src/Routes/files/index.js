/* eslint-disable*/
const express = require('express');
const ___isAuth = require('../../middlewares/__userMiddlewares/__isAuth');
const {__addFiles,__getFiles,__deleteFile}= require("../../controller/filesCRUD");
const __isBlocked = require('../../middlewares/__userMiddlewares/__isBlocked');
const __isTeacher = require('../../middlewares/__userMiddlewares/__isTeacher');

const router = express.Router();

router.get('/',__isBlocked, __getFiles );
router.post('/addFile',___isAuth,__isBlocked,__isTeacher,__addFiles);
router.delete('/deleteFile/:id',___isAuth,__isBlocked,__isTeacher,__deleteFile );


module.exports = router;