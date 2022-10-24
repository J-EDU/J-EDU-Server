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
        type: DataTypes.STRING,
        allowNull: false,
        defaultValue: 'multi',
        validate: {
            customValidator: (value) => {
                const enums = ['multi', 'normal']
                if (!enums.includes(value)) {
                    throw new Error('not a valid option')
                }
            }
        }
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
