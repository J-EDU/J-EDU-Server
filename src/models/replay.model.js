/* eslint-disable */

const Replay = (sequelize, DataTypes) =>
  sequelize.define("replay", {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
    },
    feedbackID: {
      type: DataTypes.UUID,
      references: {
        model: "feedbacks",
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
    text: {
      type: DataTypes.STRING,
    },
  });
  module.exports =Replay
