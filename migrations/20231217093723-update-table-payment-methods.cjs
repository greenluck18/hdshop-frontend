/**
   * Migarte up.
   * @param {object} queryInterface Query interface.
   * @param {object} Sequelize Sequelize class.
*/
module.exports = {
  up: async (queryInterface, Sequelize) => {
   await queryInterface.addColumn('payment_methods', 'created_at', {
        type: Sequelize.DATE,
        defaultValue: Sequelize.fn('NOW'),
        allowNull: false,
      }),
    await queryInterface.addColumn('payment_methods', 'updated_at', {
        type: Sequelize.DATE,
        defaultValue: Sequelize.fn('NOW'),
        allowNull: false,
      })
  },

  down: async (queryInterface) => {
    await queryInterface.removeColumn('payment_methods', 'created_at'),
    await queryInterface.removeColumn('payment_methods', 'updated_at')
  }
};
