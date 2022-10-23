/* eslint-disable*/
const express = require('express');
const { __getqustions, __addqustion, __deletequstion, __updatequstion } = require('../../../../controller/quiz/questionCRUD');

const router = express.Router();

router.get('/', __getqustions );
router.post('/addquestion',__addqustion);
router.delete('/deletequestion/:id',__deletequstion );
router.put('/updatequestion/:id',__updatequstion);


module.exports = router;