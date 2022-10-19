/* eslint-disable */

const FeedbackModel = (sequelize, DataTypes) =>
  sequelize.define(
    "feedback",
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
     
      text: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    {
      // Options
    }
  );

module.exports = FeedbackModel;