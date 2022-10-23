/* eslint-disable */

const QuizModel = (sequelize, DataTypes) =>
  sequelize.define(
    "quizzes",
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
      description: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      courseID: {
        type: DataTypes.UUID,
        references: {
          model: "courses",
          key: "id",
        },
      }
    },
    {
      // Options
    }
  );

module.exports = QuizModel;
