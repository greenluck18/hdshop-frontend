'use strict';
//Export
/**
   * Migarte up.
   * @param {object} queryInterface Query interface.
   * @param {object} Sequelize Sequelize class.
*/
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('items', {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      name: {
        type: Sequelize.STRING,
        allowNull:false,
      },
      price: {
        type: Sequelize.FLOAT,
        allowNull: false,
      },
      description: {
        type: Sequelize.STRING(1000),
        allowNull: false,
      },
      tradeId: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
      }
    });
  
    // Add indexes.
    await queryInterface.addIndex('items', ['id']);
    await queryInterface.addIndex('items', ['tradeId']);
  },
  /**
  * Migarte down.
  * @param {object} queryInterface Query interface.
  * @param {object} Sequelize Sequelize class.
  */
  async down(queryInterface) {
    
    // Remove indexes.
    await queryInterface.removeIndex('items', ['id']);
    await queryInterface.removeIndex('items', ['tradeId']);

    // Drop table.
    await queryInterface.dropTable('items');
  }
};
