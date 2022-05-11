'use strict'
const { Model } = require('sequelize')
module.exports = (sequelize, DataTypes) => {
  class Contacts extends Model {
    static associate (models) {
      // TODO: add associations
    }
  }
  Contacts.init({
    name: DataTypes.STRING,
    email: DataTypes.STRING,
    phone: DataTypes.STRING,
    message: DataTypes.STRING,
    deletedAt: DataTypes.DATE
  },
  {
    sequelize,
    paranoid: true,
    modelName: 'Contacts',

  }
  )
  return Contacts
}
