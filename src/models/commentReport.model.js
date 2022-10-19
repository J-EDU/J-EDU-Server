/* eslint-disable */

const CommentReportModel = (sequelize, DataTypes) =>
  sequelize.define(
    "commentReports",
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
      commentID: {
        type: DataTypes.UUID,
        references: {
          model: "comments",
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

module.exports = CommentReportModel;