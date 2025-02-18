const { v4: uuidv4 } = require("uuid");

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.addColumn("exercises", "uuid", {
      type: Sequelize.UUID,
      defaultValue: Sequelize.literal("uuid_generate_v4()"),
      allowNull: true, // Временно разрешаем NULL
    });

    // Обновляем существующие записи, чтобы они получили случайный UUID
    const [results] = await queryInterface.sequelize.query(
      `SELECT id FROM exercises`
    );

    for (const row of results) {
      await queryInterface.sequelize.query(
        `UPDATE exercises SET uuid = '${uuidv4()}' WHERE id = ${row.id}`
      );
    }

    // Теперь запрещаем NULL
    await queryInterface.changeColumn("exercises", "uuid", {
      type: Sequelize.UUID,
      allowNull: false,
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.removeColumn("exercises", "uuid");
  },
};
