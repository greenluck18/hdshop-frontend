/**
   * Migarte up.
   * @param {object} queryInterface Query interface.
   * @param {object} Sequelize Sequelize class.
*/
module.exports = {
  up: async (queryInterface, Sequelize) => {
   await queryInterface.addColumn('receipts', 'created_at', {
        type: Sequelize.DATE,
        defaultValue: Sequelize.fn('NOW'),
        allowNull: false,
      }),
    await queryInterface.addColumn('receipts', 'updated_at', {
        type: Sequelize.DATE,
        defaultValue: Sequelize.fn('NOW'),
        allowNull: false,
      })
  },

  down: async (queryInterface) => {
    await queryInterface.removeColumn('receipts', 'created_at'),
    await queryInterface.removeColumn('receipts', 'updated_at')
  }
};
