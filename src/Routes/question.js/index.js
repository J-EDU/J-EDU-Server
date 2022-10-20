/* eslint-disable */

const express= require('express');
const router =express.Router();


const {
	__addQuestion,
	__getQuestion,
	__deleteQuestion,
	__updateQuestion,
	
}=require('../../controller/questionCRUD');


router.get('/',__getQuestion);
router.delete('/deleteQuestion',__deleteQuestion);
router.post('/addQuestion',__addQuestion);
router.put('/updateQuestion',__updateQuestion);

module.exports=router;
