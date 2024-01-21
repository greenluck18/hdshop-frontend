import { sequelize } from '../db.js';
import { DataTypes, Model, Deferrable } from 'sequelize';

class UserItems extends Model {
  userItemId;
}
UserItems.init({
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  user_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: { model: 'users', key: 'id', deferrable: Deferrable.INITIALLY_IMMEDIATE }
  },
  item_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: { model: 'items', key: 'id', deferrable: Deferrable.INITIALLY_IMMEDIATE }
  }
}, {
  // Other model options go here
  sequelize, // We need to pass the connection instance
  modelName: 'UserItems',
  tableName: 'users_items',
  timestamps: true,
  underscored: true,
});

export { UserItems };

