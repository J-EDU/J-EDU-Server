/* eslint-disable */

const watchhistory = (sequelize, DataTypes) =>
  sequelize.define("watchhistories", {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
    },
    courseID: {
      type: DataTypes.UUID,
      references: {
        model: "courses",
        key: "id",
      },
    },
    userID: {
      type: DataTypes.UUID,
      references: {
        model: "users",
        key: "id",
      },
    },
    videos: { 
      type: DataTypes.ARRAY(DataTypes.UUID),
      allowNull: true,
      defaultValue: [],
    },
    counter : {
      type: DataTypes.INTEGER, 
      defaultValue : 0,
    },
    isComplete: { 
      type: DataTypes.BOOLEAN,
      defaultValue : false,
    }
  });
  module.exports = watchhistory
