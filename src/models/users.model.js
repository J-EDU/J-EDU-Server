/* eslint-disable */

const JWT = require("jsonwebtoken")

const UsersModel = (sequelize,DataTypes)=>sequelize.define('users', {
  id: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    primaryKey: true,
  },
  email: {
      type: DataTypes.STRING,
      allowNull: false,
      isEmail : true
    },
    gender: {
      type:   DataTypes.ENUM,
      values: ['Male', 'Female']
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false
    },
     fullName: {
      type: DataTypes.STRING,
      allowNull: false
    },
    phoneNumber: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    birthday: {
      type: DataTypes.DATE,
      allowNull: false
    },
    isBLocked: {
      type: DataTypes.BOOLEAN,
      defaultValue : false,
    },
    role: {
      type: DataTypes.STRING,
      defaultValue : "student",
      allowNull:false
    },
    cloudinary_id: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    URL: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    isAuth: {
      type: DataTypes.BOOLEAN,
      defaultValue : false,
    },
    experience:{
      type: DataTypes.STRING,
      defaultValue : '',
    },
    about:{
      type: DataTypes.STRING,
      defaultValue : '',
    },

    token: {
      type: DataTypes.VIRTUAL,
      get:function(){
        return JWT.sign({email:this.email }, process.env.JWT_SECRET_KEY, {
          expiresIn: '5d' 
           });;
      } 
    }

    
  }, {
    // Options 
  });
 
  module.exports = UsersModel