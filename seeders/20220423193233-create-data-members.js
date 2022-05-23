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
          description: 'Graduado en psicología, especializado en el ámbito clínico con 6 años de trayectoria laboral en centros hospitalarios, tratando con pacientes de mediana edad. Con un perfil persuasivo e influyente, he afrontado todo tipo de casos, aprendiendo el proceso análisis y evaluación, tanto para casos de alta como para situaciones de crisis.',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: 'María García',
          image: 'https://cohorte-abril-98a56bb4.s3.us-east-1.amazonaws.com/1653281254046-tmp-1-1653281254028',
          description: `
          <p>Graduada en Administración y Dirección de Empresas en la Universidad de Madrid.</p><p>Le encanta pertenecer a esta fundacion, ayuda y lleva todas las cuentas en orden.</p>
          `,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: 'Marco Fernandez',
          image: 'https://cohorte-abril-98a56bb4.s3.us-east-1.amazonaws.com/1653281284030-tmp-2-1653281284018',
          description: 'Posee mas de tres años de experiencia, en los últimos años ha trabajado en centros de atención a las personas mayores y he realizado cursos específicos de Rehabilitación y fisioterapia geriátrica: Valoración e intervención terapéutica y preventiva en la Universidad Europea Miguel de Cervantes.',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: 'Mario Fuentes',
          image: 'https://cohorte-abril-98a56bb4.s3.us-east-1.amazonaws.com/1653281366682-tmp-3-1653281366674',
          description: `
          <p>Ha realizado estudios de postgrado sobre clínica de adultos en <strong>Centro Dos</strong> y en la Escuela del Psicoanálisis del <strong>Hospital J. T. Borda</strong>. Concurrió también a la Red de Enseñanza y Transmisión de la Escuela Freudiana de Buenos Aires <strong>(EFBA)</strong></p><p>Actualmente se desempeña como psicóloga clínica en <strong>AIFAN Salud mental</strong>; en <strong>Øtro Cauce Psicoanálisis</strong> y en su&nbsp; consultorio particular.</p><p>En forma paralela a la formación académica ha asistido y asiste a <strong>Grupos de Estudio</strong> (tradicional metodología de formación en psicoanálisis) en los que se lee y estudia la Obra de Sigmund Freud y Jaques Lacan.</p>
          `,
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
