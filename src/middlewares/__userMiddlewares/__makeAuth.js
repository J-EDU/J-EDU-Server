/*eslint-disable */

const { UsersDB } = require("../../models");

const __makeAuth = async (req, res, next) => {
    try {
        const { id } = req.body;
      
    
        let findUser = await UsersDB.findOne({ where: { id: id } });
        let isAuthupdated = !findUser.isAuth; 
        await UsersDB.update({ ...findUser,isAuth:isAuthupdated }, { where: { id } });
    
        res.status(200).json({ msg: "updated Succfully" });
      } catch (err) {
        console.log("IsBlocked ~ err", err);
    
        next(`Error inside make Block function : ${err}`);
      }
};

module.exports = __makeAuth