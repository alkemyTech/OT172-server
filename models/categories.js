'use strict'
const { Model } = require('sequelize')
module.exports = (sequelize, DataTypes) => {
  class Categories extends Model {
    static associate (models) {
      Categories.hasMany(models.Entries,{
        as:"Entries",
        foreignKey: "categoryId"
      })
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
      paranoid: true,
      modelName: 'Categories'
    }
  )
  return Categories
}
