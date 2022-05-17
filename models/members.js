'use strict'
const { Model } = require('sequelize')

module.exports = (sequelize, Datatypes) => {
  class Members extends Model {
    static associate (models) {
      // define association here
    }
  }

  Members.init(
    {
      name: Datatypes.STRING,
      image: Datatypes.STRING,
      description: Datatypes.TEXT,
      deletedAt: Datatypes.DATE
    },
    {
      sequelize,
      modelName: 'Members',
      paranoid: true
    }
  )

  return Members
}
