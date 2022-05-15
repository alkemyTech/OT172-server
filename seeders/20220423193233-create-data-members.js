'use strict'

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      'Members',
      [
        {
          name: 'María Irola',
          image: 'https://cohorte-abril-98a56bb4.s3.us-east-1.amazonaws.com/1652624853695-tmp-1-1652624853684',
          description: `
          <p>Estudió economía y se especializó en economía para el desarrollo.&nbsp;</p><p>Comenzó como voluntaria en la fundación y fue quien promovió el crecimiento y la organización de la institución acompañando la transformación de un simple comedor barrial al centro comunitario de atención integral que es hoy en día.</p>
          `,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: 'Marita Gomez',
          image: 'https://cohorte-abril-98a56bb4.s3.us-east-1.amazonaws.com/1652625040013-tmp-2-1652625040006',
          description: `
          <p>Estudió la carrera de nutrición y se especializó en nutrición infantil.&nbsp;</p><p>Toda la vida fue voluntaria en distintos espacios en el barrio hasta que decidió abrir un comedor propio.&nbsp;</p><p>Comenzó trabajando con 5 familias y culminó su trabajo transformando <strong>Somos Más</strong> en la organización que es hoy.</p>
          `,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: 'Rodrigo Fuente',
          image: 'https://cohorte-abril-98a56bb4.s3.us-east-1.amazonaws.com/1652625502067-tmp-1-1652625502053',
          description: 'Un gran psicologo',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: 'María García',
          image: '',
          description: '',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: 'Marco Fernandez',
          image: '',
          description: '',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: 'Mario Fuentes',
          image: '',
          description: '',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: 'Cecilia Mendez',
          image: '',
          description: '',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: 'Miriam Rodriguez',
          image: '',
          description: '',
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
