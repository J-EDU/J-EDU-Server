const express = require('express');
const {  VideosDB } = require('../../models');
const router = express.Router();



async function deleteVideo (req, res, next) {

    try {
        let id = req.params.id;
        await VideosDB.destroy({ where: { id } });
        res.status(202).end();
      } catch (err) {
        next(`Error inside deleteVideo function : ${err}`);
      }
    }



module.exports = router;