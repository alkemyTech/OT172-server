'use strict'
const bcrypt = require('bcrypt')

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Users', [{
      firstName: 'Alina',
      lastName: 'Murillo',
      email: 'alina@mail.com',
      password: `${bcrypt.hashSync('A.alina123', 10)}`,
      roleId: 1,
      image: 'https://www.designevo.com/res/templates/thumb_small/colorful-hand-and-warm-community.png',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      firstName: 'Patricio',
      lastName: 'Zapata',
      email: 'patricio@mail.com',
      password: `${bcrypt.hashSync('A.patricio123', 10)}`,
      roleId: 1,
      image: 'https://www.designevo.com/res/templates/thumb_small/colorful-hand-and-warm-community.png',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      firstName: 'Santiago',
      lastName: 'Puertas',
      email: 'santiago@mail.com',
      password: `${bcrypt.hashSync('A.santi123', 10)}`,
      roleId: 1,
      image: 'https://www.designevo.com/res/templates/thumb_small/colorful-hand-and-warm-community.png',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      firstName: 'Arnau',
      lastName: 'Montes',
      email: 'arnau@mail.com',
      password: `${bcrypt.hashSync('A.arnau123', 10)}`,
      roleId: 1,
      image: 'https://www.designevo.com/res/templates/thumb_small/colorful-hand-and-warm-community.png',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      firstName: 'Brenda',
      lastName: 'Saez',
      email: 'brenda@mail.com',
      password: `${bcrypt.hashSync('A.brenda123', 10)}`,
      roleId: 1,
      image: 'https://www.designevo.com/res/templates/thumb_small/colorful-hand-and-warm-community.png',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      firstName: 'Silvia',
      lastName: 'Lopez',
      email: 'silviaLopez@mail.com',
      password: `${bcrypt.hashSync('A.silvia123', 10)}`,
      roleId: 1,
      image: 'https://www.designevo.com/res/templates/thumb_small/colorful-hand-and-warm-community.png',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      firstName: 'Anton',
      lastName: 'Travis',
      email: 'anton@mail.com',
      password: `${bcrypt.hashSync('A.anton123', 10)}`,
      roleId: 1,
      image: 'https://www.designevo.com/res/templates/thumb_small/colorful-hand-and-warm-community.png',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      firstName: 'John',
      lastName: 'Lemon',
      email: 'johnLemon@mail.com',
      password: `${bcrypt.hashSync('A.john123', 10)}`,
      roleId: 1,
      image: 'https://www.designevo.com/res/templates/thumb_small/colorful-hand-and-warm-community.png',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      firstName: 'Ted',
      lastName: 'Buck',
      email: 'ted@mail.com',
      password: `${bcrypt.hashSync('A.ted123', 10)}`,
      roleId: 1,
      image: 'https://www.designevo.com/res/templates/thumb_small/colorful-hand-and-warm-community.png',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      firstName: 'Courtney',
      lastName: 'Clark',
      email: 'courtney@mail.com',
      password: `${bcrypt.hashSync('A.courtney123', 10)}`,
      roleId: 1,
      image: 'https://www.designevo.com/res/templates/thumb_small/colorful-hand-and-warm-community.png',
      createdAt: new Date(),
      updatedAt: new Date()
    }
    ], {})
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Users', null, {})
  }
}
