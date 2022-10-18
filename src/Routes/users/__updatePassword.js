/* eslint-disable*/
const express = require('express');
const { UsersDB } = require('../../models');


const router = express.Router();

router.put('/:id',async (req, res,next) => {

    try {
        let id = req.params.id;
        let newPassword=req.body;
        await UsersDB.update(newPassword,{where:{id}});
        let findUser= await UsersDB.findOne({ where: { id : id} });
        let updatePassword= await findUser.update(newPassword);
        res.status(202).json({updatePassword})
      } catch (err) {
        console.log("Password ~ err", err)

        next(`Error inside updatePassword function : ${err}`);
      }
    });


    module.exports = router;