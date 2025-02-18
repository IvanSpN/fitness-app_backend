'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.sequelize.query(`
      ALTER TABLE exercises DROP CONSTRAINT exercises_pkey;
      ALTER TABLE exercises ADD PRIMARY KEY (uuid);
    `);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.sequelize.query(`
      ALTER TABLE exercises DROP CONSTRAINT exercises_pkey;
      ALTER TABLE exercises ADD PRIMARY KEY (id);
    `);
  }
};

