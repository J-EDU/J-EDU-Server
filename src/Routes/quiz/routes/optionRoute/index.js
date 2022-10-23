/* eslint-disable*/
const express = require('express');
const { __getoptions, __addoption, __deleteoption, __updateoption } = require('../../../../controller/quiz/optionCRUD');

const router = express.Router();

router.get('/', __getoptions );
router.post('/addOption',__addoption);
router.delete('/deleteOption/:id',__deleteoption );
router.put('/updateOption/:id',__updateoption);


module.exports = router;