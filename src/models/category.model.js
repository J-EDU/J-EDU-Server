/* eslint-disable */

const CategoryModel = (sequelize, DataTypes) =>
  sequelize.define(
    "categories",
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
        type: DataTypes.ENUM('IT', 'Finance And Accounting','Marketing','Design'),
        defaultValue: 'IT'
      }
     
    },
    {
      // Options
    }
  );

module.exports = CategoryModel;