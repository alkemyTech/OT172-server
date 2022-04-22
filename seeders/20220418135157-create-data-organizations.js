'use strict'

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      'Organizations',
      [
        {
          name: 'Somos Más',
          phone: '1160112988',
          imageUrl: 'https://unaimagen.png',
          address: 'una direccion',
          welcomeText: 'Proyecto ONG - Somos Más',
          urlFacebook: 'https://es-la.facebook.com',
          urlLinkedin: 'https://www.linkedin.com/in',
          urlInstagram: 'https://www.instagram.com',
          createdAt: new Date(),
          updatedAt: new Date()
        }
      ],
      {}
    )
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Organizations', null, {})
  }
}
