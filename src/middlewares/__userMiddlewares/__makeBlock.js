/*eslint-disable */

const { UsersDB } = require("../../models");

const __makeBlock = async (req, res, next) => {
    try {
        const { id } = req.body;
      
    
        let findUser = await UsersDB.findOne({ where: { id: id } });
        let isBLockedupdated = !findUser.isBLocked; 
        console.log("Hassan ~ isBLocked", isBLockedupdated)
        await UsersDB.update({ ...findUser,isBLocked:isBLockedupdated }, { where: { id } });
    
        res.status(200).json({ msg: "updated Succfully" });
      } catch (err) {
        console.log("IsBlocked ~ err", err);
    
        next(`Error inside make Block function : ${err}`);
      }
};

module.exports = __makeBlock