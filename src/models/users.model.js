/* eslint-disable */

const UsersModel = (sequelize,DataTypes)=>sequelize.define('users', {
 
    username: {
      type: DataTypes.STRING,
      allowNull: false
    },
  }, {
    // Options 
  });
 
  module.exports = UsersModel