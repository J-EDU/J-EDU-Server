/* eslint-disable*/
const { UsersDB } = require("../models");
const bcrypt = require("bcrypt");
const base = require("base-64");

const __login = async (req, res, next) => {

    const header = req.headers.authorization.split(" ")[1];
    const userinfo = base.decode(header).split(":");
    const email = userinfo[0];
    const password = userinfo[1];
    try {
      const user = await UsersDB.findOne({ where: { email } });
      if (user) {
        const isAuth = await bcrypt.compare(password, user.password);
        if (!isAuth) return next({ message: `The password is not correct` });
        res.status(200).json({ user });
        return;
      } else {
        res.status(409).json({ messgae: "User Not Found" });
        return;
      }
    } catch (error) {
      next({ message: `Error happend in signin ${error}` });
    }
};

const __signup = async (req, res, next) => {
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
};

const __updatePassword = async (req, res, next) => {
    try {
        let id = req.params.id;
        const { password } = req.body;
        password = await bcrypt.hash(password, 10);
    
        let findUser = await UsersDB.findOne({ where: { id: id } });
        await UsersDB.update({ ...findUser, password }, { where: { id } });
    
        res.status(200).json({ msg: "updated Succfully" });
      } catch (err) {
        console.log("Password ~ err", err);
    
        next(`Error inside updatePassword function : ${err}`);
      }
};

const __updateUser= async (req, res, next) => {
    try {
		let id = req.user.id;
		let newUserData = req.body;  
		await UsersDB.update(newUserData, { where: { id } });
		let updatedUser = await UsersDB.findOne({ where: { id } });
		res.status(200).send(updatedUser);
	} catch (err) {
		next(`Error inside updatedUser  function : ${ err }`);
	}
};

module.exports = {
  __login,
  __signup,
  __updatePassword,
  __updateUser
};
