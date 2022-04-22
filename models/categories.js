'use strict'
const { Model } = require('sequelize')
module.exports = (sequelize, DataTypes) => {
  class Categories extends Model {
    static associate (models) {
      //
    }
  }
  Categories.init(
    {
      name: DataTypes.STRING,
      description: DataTypes.STRING,
      deletedAt: DataTypes.DATE
    },
    {
      sequelize,
      modelName: 'Categories'
    }
  )
  return Categories
}
