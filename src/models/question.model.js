/* eslint-disable */

const Question = (sequelize, DataTypes) =>
  sequelize.define("question", {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
    },
   
    text: {
      type: DataTypes.STRING,
    },

 

    answer:{
        type : DataTypes.BOOLEAN,
        allowNull: false,
    }

  });
  module.exports =Question
