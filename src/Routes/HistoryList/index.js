const express = require('express');
const {__addhistoryList} =require('../../controller/historyListCRUD')
const {__gethistoryList}= require('../../controller/historyListCRUD')
const router = express.Router();

router.get('/', __gethistoryList );
router.post('/addHistoryList',__addhistoryList);


module.exports = router;