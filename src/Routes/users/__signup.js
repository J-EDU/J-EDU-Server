/* eslint-disable*/
const express = require('express');
const bcrypt = require('bcrypt');
const { UsersDB,TeacherDB } = require('../../models');

const router = express.Router();

router.post('/', async (req, res, next) => {
    const {email,password,role} = req.body;
    const hashedPassword = await bcrypt.hash(password, 10);
    
    try {

        const user =await UsersDB.findOne({ where: { email } });
        if(!user){
            const user = await UsersDB.create({...req.body,password : hashedPassword});
            res.status(200).json({user});
            return;
        }else{
            res.status(409).json({messgae: "the user is Already exist"});
            return ;
        }
   
    } catch (error) {
      next({message:`Error happend in Singup ${error}`})
    }
});


module.exports = router;
