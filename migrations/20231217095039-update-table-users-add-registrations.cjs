/**
   * Migarte up.
   * @param {object} queryInterface Query interface.
   * @param {object} Sequelize Sequelize class.
*/
module.exports = {
  up: async (queryInterface, Sequelize) => {
   await queryInterface.addColumn('users', 'login', {
        type: Sequelize.STRING,
        unique: true,
        allowNull: false,
      }),
    await queryInterface.addColumn('users', 'password', {
        type: Sequelize.STRING,
        allowNull: false,
      })
      await queryInterface.addIndex('users', ['login']);
  },
/**
  * Migarte down.
  * @param {object} queryInterface Query interface.
*/
  down: async (queryInterface) => {

    // Remove indexes.
    await queryInterface.removeIndex('users', ['login']);

    // Drop colums.
    await queryInterface.removeColumn('users', 'login'),
    await queryInterface.removeColumn('users', 'password')
  }
};
