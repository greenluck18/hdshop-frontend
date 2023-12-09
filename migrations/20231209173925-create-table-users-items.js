
//Export
/**
   * Migarte up.
   * @param {object} queryInterface Query interface.
   * @param {object} Sequelize Sequelize class.
*/
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('users_items', {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      user_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: { model: 'users', key: 'id' }   
      },
      item_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: { model: 'items', key: 'id' }
      }
    });
  
    // Add indexes.
    await queryInterface.addIndex('users_items', ['id']);
    await queryInterface.addIndex('users_items', ['user_id']);
    await queryInterface.addIndex('users_items', ['item_id'])
  },
  /**
  * Migarte down.
  * @param {object} queryInterface Query interface.
  * @param {object} Sequelize Sequelize class.
  */
  async down(queryInterface) {
    // Remove indexes.
    await queryInterface.removeIndex('users_items', ['id']);
    await queryInterface.removeIndex('users_items', ['user_id']);
    await queryInterface.removeIndex('users_items', ['item_id']);
    // Drop table.
    await queryInterface.dropTable('users_items');
  }
};
