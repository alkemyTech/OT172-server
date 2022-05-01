'use strict'
const bcrypt = require('bcrypt')

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Users', [{
      firstName: 'Wilton',
      lastName: 'Ashley',
      email: 'wilton@mail.com',
      password: `${bcrypt.hashSync('wilton123', 10)}`,
      roleId: 2,
      image: 'https://www.designevo.com/res/templates/thumb_small/colorful-hand-and-warm-community.png',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      firstName: 'Carlo',
      lastName: 'Suarez',
      email: 'carlo@mail.com',
      password: `${bcrypt.hashSync('carlo123', 10)}`,
      roleId: 2,
      image: 'https://www.designevo.com/res/templates/thumb_small/colorful-hand-and-warm-community.png',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      firstName: 'Edwin',
      lastName: 'Barton',
      email: 'edwin@mail.com',
      password: `${bcrypt.hashSync('edwin123', 10)}`,
      roleId: 2,
      image: 'https://www.designevo.com/res/templates/thumb_small/colorful-hand-and-warm-community.png',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      firstName: 'Selena',
      lastName: 'Blair',
      email: 'selena@mail.com',
      password: `${bcrypt.hashSync('selena123', 10)}`,
      roleId: 2,
      image: 'https://www.designevo.com/res/templates/thumb_small/colorful-hand-and-warm-community.png',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      firstName: 'Connie',
      lastName: 'Jefferson',
      email: 'connie@mail.com',
      password: `${bcrypt.hashSync('connie123', 10)}`,
      roleId: 2,
      image: 'https://www.designevo.com/res/templates/thumb_small/colorful-hand-and-warm-community.png',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      firstName: 'Silvia',
      lastName: 'Pardo',
      email: 'silvia@mail.com',
      password: `${bcrypt.hashSync('silvia123', 10)}`,
      roleId: 2,
      image: 'https://www.designevo.com/res/templates/thumb_small/colorful-hand-and-warm-community.png',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      firstName: 'Noemi',
      lastName: 'Galloway',
      email: 'noemi@mail.com',
      password: `${bcrypt.hashSync('noemi123', 10)}`,
      roleId: 2,
      image: 'https://www.designevo.com/res/templates/thumb_small/colorful-hand-and-warm-community.png',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      firstName: 'John',
      lastName: 'Pruitt',
      email: 'john@mail.com',
      password: `${bcrypt.hashSync('john123', 10)}`,
      roleId: 2,
      image: 'https://www.designevo.com/res/templates/thumb_small/colorful-hand-and-warm-community.png',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      firstName: 'Federico',
      lastName: 'Velez',
      email: 'federico@mail.com',
      password: `${bcrypt.hashSync('federico123', 10)}`,
      roleId: 2,
      image: 'https://www.designevo.com/res/templates/thumb_small/colorful-hand-and-warm-community.png',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      firstName: 'Lisa',
      lastName: 'French',
      email: 'lisa@mail.com',
      password: `${bcrypt.hashSync('lisa123', 10)}`,
      roleId: 2,
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
