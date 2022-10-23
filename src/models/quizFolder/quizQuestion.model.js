/* eslint-disable */

const QuestionModel = (sequelize, DataTypes) =>
  sequelize.define(
    "questions",
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
      type: {
        type: DataTypes.ENUM('multi', 'normal'),
        defaultValue: 'normal'
      },
      hint: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      quizID: {
        type: DataTypes.UUID,
        references: {
          model: "quizzes",
          key: "id",
        },
      }
    },
    {
      // Options
    }
  );

module.exports = QuestionModel;
