/* eslint-disable */

const CommentModel = (sequelize, DataTypes) =>
  sequelize.define(
    "commentsTable",
    {
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
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

module.exports = CommentModel;
