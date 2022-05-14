'use strict'
const {
  Model
} = require('sequelize')
module.exports = (sequelize, DataTypes) => {
  class Entries extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate (models) {
      Entries.belongsTo(models.Categories, { as: 'categorye' })//Modificado de category a categorye para testeos
    }
  };
  //   Criterios de aceptación: Las entradas serán el contenido publicado en la sección "Novedades" del sitio.
  //   Nombre de tabla: entries.
  //   Campos: name, content, image, categoryId, type (una entrada podrá ser event, news, etc), deletedAt (utilizado para softDelete)
  Entries.init({
    name: DataTypes.STRING,
    content: DataTypes.STRING,
    image: DataTypes.STRING,
    type: DataTypes.STRING,
    category: DataTypes.STRING,
    deletedAt: DataTypes.DATE
  }, {
    sequelize,
    paranoid: true,
    modelName: 'Entries'
  })
  return Entries
}
