'use strict'

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      'Organizations',
      [
        {
          name: 'Somos Más',
          phone: '1160112988',
          image: 'https://assets-dev.alkemy.org/assets/logo.svg',
          address: 'una direccion',
          welcomeText: 'Proyecto ONG - Somos Más',
          urlFacebook: 'https://es-la.facebook.com/Somos_Mas',
          urlLinkedin: 'https://www.linkedin.com/in/SomosMas',
          urlInstagram: 'https://www.instagram.com/SomosMas',
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
