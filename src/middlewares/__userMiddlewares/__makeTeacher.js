/*eslint-disable */

const { UsersDB } = require("../../models");

const __makeTeacher = async (req, res, next) => {
    try {
        const { id } = req.body;
      
    
        let findUser = await UsersDB.findOne({ where: { id: id } });
        let isTeacherUbdate = !findUser.isTeacher; 
        console.log("Hassan ~ isTeacher", isTeacherUbdate)
        await UsersDB.update({ ...findUser,isTeacher:isTeacherUbdate }, { where: { id } });
    
        res.status(200).json({ msg: "updated successfully" });
      } catch (err) {
        console.log("IsBlocked ~ err", err);
    
        next(`Error inside make Teacher function : ${err}`);
      }
};

module.exports = __makeTeacher

