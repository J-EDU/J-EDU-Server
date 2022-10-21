/* eslint-disable*/
const express = require('express');
const ___isAuth = require('../../middlewares/__userMiddlewares/__isAuth');
const {__addFiles,__getFiles,__deleteFile}= require("../../controller/filesCRUD");
const __uplaodFile = require('../../middlewares/__courseMiddlrewares/__uploadFiles');
const __isBlocked = require('../../middlewares/__userMiddlewares/__isBlocked');

const router = express.Router();

router.get('/', __getFiles );
router.post('/addFile',___isAuth,__isBlocked,__uplaodFile,__addFiles);
router.delete('/deleteFile/:id',__deleteFile );


module.exports = router;