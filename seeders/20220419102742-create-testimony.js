'use strict'

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      'Testimonials',
      [
        {
          name: 'Primer Testimonio',
          image:
            'https://www.alkemy.org/static/media/meli.a0e74e85.svg',
          content: 'Contenido Primer Testimonio',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: 'Segundo Testimonio',
          image:
            'https://www.alkemy.org/static/media/Modo.bb099324.svg',
          content: 'Contenido Segundo Testimonio',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: 'Tercer Testimonio',
          image:
            'https://www.alkemy.org/static/media/Enerminds.333784bf.svg',
          content: 'Contenido Tercer Testimonio',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: 'Cuarto Testimonio',
          image:
            'https://www.alkemy.org/static/media/accenture.6261728d.svg',
          content: 'Contenido Cuarto Testimonio',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: 'Quinto Testimonio',
          image:
            'https://www.alkemy.org/static/media/Despegar.9945de7a.svg',
          content: 'Contenido Quinto Testimonio',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: 'Sexto Testimonio',
          image:
            'https://www.alkemy.org/static/media/Omint.e2338d96.svg',
          content: 'Contenido Sexto Testimonio',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: 'Septimo Testimonio',
          image:
            'https://www.alkemy.org/static/media/artekium.a5a3aa05.svg',
          content: 'Contenido Septimo Testimonio',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: 'Octavo Testimonio',
          image:
            'https://www.alkemy.org/static/media/Nubimetrics.ea70de60.svg',
          content: 'Contenido Octavo Testimonio',
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
     * await queryInterface.bulkDelete('Testimonials', null, {});
     */
  }
}
