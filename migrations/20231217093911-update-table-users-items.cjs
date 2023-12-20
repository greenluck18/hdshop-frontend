/**
   * Migarte up.
   * @param {object} queryInterface Query interface.
   * @param {object} Sequelize Sequelize class.
*/
module.exports = {
  up: async (queryInterface, Sequelize) => {
   await queryInterface.addColumn('users_items', 'created_at', {
        type: Sequelize.DATE,
        defaultValue: Sequelize.fn('NOW'),
        allowNull: false,
      }),
    await queryInterface.addColumn('users_items', 'updated_at', {
        type: Sequelize.DATE,
        defaultValue: Sequelize.fn('NOW'),
        allowNull: false,
      })
  },

  down: async (queryInterface) => {
    await queryInterface.removeColumn('users_items', 'created_at'),
    await queryInterface.removeColumn('users_items', 'updated_at')
  }
};
