'use strict'

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      'Members',
      [
        {
          name: 'Primer Miembro',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: 'Segundo Miembro',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: 'Tercer Miembro',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: 'Cuarto Miembro',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: 'Quinto Miembro',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: 'Sexto Miembro',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: 'Septimo Miembro',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: 'Octavo Miembro',
          createdAt: new Date(),
          updatedAt: new Date()
        }

      ],
      {}
    )
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Members', null, {})
  }
}
