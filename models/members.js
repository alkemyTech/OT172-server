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
      image: Datatypes.STRING
    },
    {
      sequelize,
      modelName: 'Members'
    }
  )

  return Members
}
