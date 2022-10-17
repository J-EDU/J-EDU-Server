const express = require('express');
const __getAllComments = require("./__getAllComments");
const __deleteComment = require("./__deleteComment");
const __addComment= require("./__addComment");



const router = express.Router();

router.get('/',(req,res)=>{
    res.json({
        message : 'Comment Home'
    })
} );
router.use('/getComment',__getAllComments );
router.use('/deleteComment',__deleteComment );
router.use('/addComment',__addComment );



module.exports = router;
