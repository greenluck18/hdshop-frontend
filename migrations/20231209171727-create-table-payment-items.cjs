
//Export
/**
   * Migarte up.
   * @param {object} queryInterface Query interface.
   * @param {object} Sequelize Sequelize class.
*/
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('payment_items', {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      payment_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: { model: 'payments', key: 'id' }   
      },
      item_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: { model: 'items', key: 'id' }
      }
    });
  
    // Add indexes.
    await queryInterface.addIndex('payment_items', ['id']);
    await queryInterface.addIndex('payment_items', ['payment_id']);
    await queryInterface.addIndex('payment_items', ['item_id'])
  },
  /**
  * Migarte down.
  * @param {object} queryInterface Query interface.
  * @param {object} Sequelize Sequelize class.
  */
  async down(queryInterface) {
    // Remove indexes.
    await queryInterface.removeIndex('payment_items', ['id']);
    await queryInterface.removeIndex('payment_items', ['payment_id']);
    await queryInterface.removeIndex('payment_items', ['item_id']);
    // Drop table.
    await queryInterface.dropTable('payment_items');
  }
};
