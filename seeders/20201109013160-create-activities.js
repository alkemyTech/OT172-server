"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "Activities",
      [
        {
          name: "actividad reciente",
          image: "image A",
          content: "contenido de la actividad",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "actividad de hoy",
          image: "image B",
          content: "nuevo contenido de la actividad",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  },
};
