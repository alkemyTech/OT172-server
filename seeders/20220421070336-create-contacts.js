'use strict'

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      'Contacts',
      [
        {
          name: 'Juan',
          email: 'juan@gmail.com',
          phone: '123456789',
          message: 'Hola soy un mensaje',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: 'Homer Simpson',
          email: 'simpsonhomer@gmail.com',
          phone: '123456710',
          message: 'Hola soy otro mensaje',
          createdAt: new Date(),
          updatedAt: new Date()
        }
      ],
      {}
    )
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete('Contacts', null, {})
  }
}
