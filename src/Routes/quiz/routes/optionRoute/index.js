/* eslint-disable*/
const express = require('express');
const { __getoptions, __addoption, __deleteoption, __updateoption } = require('../../../../controller/quiz/optionCRUD');
const __isTeacher=require('../../../../middlewares/__userMiddlewares/__isTeacher')
const __isAuth=require('../../../../middlewares/__userMiddlewares/__isAuth')

const router = express.Router();

router.get('/', __getoptions );
router.post('/addOption',__isAuth,__addoption);
router.delete('/deleteOption/:id',__isAuth,__deleteoption );
router.put('/updateOption/:id',__isAuth,__updateoption);


module.exports = router;