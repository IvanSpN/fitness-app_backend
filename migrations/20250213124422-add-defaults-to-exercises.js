'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.sequelize.query(`
      ALTER TABLE exercises
      ALTER COLUMN uuid SET DEFAULT gen_random_uuid(),
      ALTER COLUMN "createdAt" SET DEFAULT now(),
      ALTER COLUMN "updatedAt" SET DEFAULT now();
    `);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.sequelize.query(`
      ALTER TABLE exercises
      ALTER COLUMN uuid DROP DEFAULT,
      ALTER COLUMN "createdAt" DROP DEFAULT,
      ALTER COLUMN "updatedAt" DROP DEFAULT;
    `);
  },
};

