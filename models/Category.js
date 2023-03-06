const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection.js');

class Category extends Model {}

Category.init(
  {
    //not sure if I need this
    // category_id: {
    //   type: DataTypes.INTEGER,
    //   primaryKey: true,
    //   autoIncrement: true
    // },
    // define columns
    Shirts: {
      type: DataTypes.STRING
    },
    Shorts: {
      type: DataTypes.STRING
    },
    Music: {
      type: DataTypes.STRING
    },
    Hats: {
      type: DataTypes.STRING
    },
    Shoes: {
      type: DataTypes.STRING
    }
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'category',
  }
);

module.exports = Category;
