const express = require('express');
const {__addWishList} =require('../../controller/wishListCRUD')
const {__deletewishList} =require('../../controller/wishListCRUD')
const {__getWishList}= require('../../controller/wishListCRUD')
const router = express.Router();

router.get('/', __getWishList );
router.post('/addWishList',__addWishList);
router.delete('/deleteWishList/:id',__deletewishList);

module.exports = router;