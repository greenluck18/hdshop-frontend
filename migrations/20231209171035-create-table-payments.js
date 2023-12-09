'use strict';
//Export
/**
   * Migarte up.
   * @param {object} queryInterface Query interface.
   * @param {object} Sequelize Sequelize class.
*/
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('payments', {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      payment_method_id: {
        type: Sequelize.INTEGER,
        allowNull: false,    
        references: { model: 'payment_methods', key: 'id' }    
      },
      userId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: { model: 'users', key: 'id' }    
      }, 
      amount: {
        type: Sequelize.FLOAT,
        allowNull: false,
      },
      receipt_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: { model: 'receipts', key: 'id' }    
      }
    });
  
    // Add indexes.
    await queryInterface.addIndex('payments', ['id']);
    await queryInterface.addIndex('payments', ['payment_method_id']);
    await queryInterface.addIndex('payments', ['userId']);
    await queryInterface.addIndex('payments', ['amount']);
    await queryInterface.addIndex('payments', ['receipt_id']);
  },
  /**
  * Migarte down.
  * @param {object} queryInterface Query interface.
  * @param {object} Sequelize Sequelize class.
  */
  async down(queryInterface) {
    
    // Remove indexes.
    await queryInterface.removeIndex('payments', ['id']);
    await queryInterface.removeIndex('payments', ['payment_method_id']);
    await queryInterface.removeIndex('payments', ['userId']);
    await queryInterface.removeIndex('payments', ['amount']);
    await queryInterface.removeIndex('payments', ['receipt_id']);

    // Drop table.
    await queryInterface.dropTable('payments');
  }
};
