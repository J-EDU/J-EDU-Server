const whishListModel = (sequelize, DataTypes) =>
  sequelize.define(
    "whishList",
    {
    whishListID: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
      },
      userID: {
        type: DataTypes.UUID,
		allowNull: false,
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
      },
    },
    {
      // Options
    }
  );

module.exports = whishListModel;