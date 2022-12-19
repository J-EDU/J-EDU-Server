/* eslint-disable*/
const express = require('express');
const { __getqustions, __addqustion, __deletequstion, __updatequstion } = require('../../../../controller/quiz/questionCRUD');
const __isTeacher=require('../../../../middlewares/__userMiddlewares/__isTeacher')
const __isAuth=require('../../../../middlewares/__userMiddlewares/__isAuth')
const __isBlocked=require('../../../../middlewares/__userMiddlewares/__isBlocked')
const router = express.Router();

router.get('/', __getqustions );
router.post('/addquestion',__isAuth,__isBlocked,__addqustion);
router.delete('/deletequestion/:id',__isAuth,__isBlocked,__deletequstion );
router.put('/updatequestion/:id',__isAuth,__isBlocked,__updatequstion);


module.exports = router;