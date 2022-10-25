/* eslint-disable*/
const { UsersDB } = require("../models");
const cloudinaryClass = require("../collectionsAtAll/CloudinaryClass");
const bcrypt = require("bcrypt");
const base = require("base-64");
const cloudinary = new cloudinaryClass()

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
      next(`Error happend in user ${error}`);    }
};

const __signup = async (req, res, next) => {
    const {email,password,role} = req.body;

    const hashedPassword = await bcrypt.hash(password, 10);
   
    try {

        const user =await UsersDB.findOne({ where: { email } });
        if(!user){
          let url = "https://res.cloudinary.com/dybwswkzr/image/upload/v1666480803/Avatars/noPic_cjpw0p.png";
          let public_id = null;
          if(req.files){
            const result= await cloudinary.upload_avatar(req.files.image.tempFilePath)
            public_id= result.public_id;
            url = result.url 
          }
          const user = await UsersDB.create({
            ...req.body,password : hashedPassword,
            URL :url,
            cloudinary_id: public_id
          });
            res.status(200).json({user});
            return;
        }else{
            res.status(409).json({messgae: "the user is Already exist"});
            return ;
        }
   
    } catch (error) {
      next(`Error happend in user ${error}`);    }
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
		await userCollection.UPDATE(id, newUserData);
		let user = await userCollection.READ_ONE(id)
		if (user)
			return res.status(200).json({ user });
			return res.status(201).json({ msg: "there is no Courses" });
	} catch (err) {
		next(`User CRUD.js ~ line 35  ${err}`)
	}
};

module.exports = {
  __login,
  __signup,
  __updatePassword,
  __updateUser
};
