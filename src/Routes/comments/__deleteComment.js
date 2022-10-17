const express = require('express');
const {  CommentDB } = require('../../models');
const router = express.Router();



router.delete('/',async (req, res,next) => {

    try {
        let id = req.params.id;
        await CommentDB.destroy({ where: { id } });
        res.status(202).end();
      } catch (err) {
        next(`Error inside deleteOneComment function : ${err}`);
      }
    });



module.exports = router;