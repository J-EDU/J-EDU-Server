/* eslint-disable */

const historyModel = (sequelize, DataTypes) =>
  sequelize.define(
    "history",
    {
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
	  },
      userID: {
        type: DataTypes.UUID,
        references: {
          model: "users",
          key: "id",
        },
      },
      courseID: {
        type: DataTypes.UUID,
        references: {
          model: "courses",
          key: "id",
        },
      },  videoID: {
        type: DataTypes.UUID,
        references: {
          model: "videos",
          key: "id",
        },
      },
    
    },
    {
      // Options
    }
  );

module.exports = historyModel;
