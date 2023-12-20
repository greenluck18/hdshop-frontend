
import { sequelize } from '../db.js';
import { DataTypes, Model, Sequelize, Deferrable } from 'sequelize';


class PaymentItems extends Model {
  paymentItemId
}
PaymentItems.init({
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  payment_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: { model: 'payments', key: 'id', 
    deferrable: Deferrable.INITIALLY_IMMEDIATE }
  },
  item_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: { model: 'items', key: 'id',
     deferrable: Deferrable.INITIALLY_IMMEDIATE }
  },
  created_at: {
    type: DataTypes.DATE,
    defaultValue: Sequelize.fn('NOW'),
    allowNull: false,
  },
  updated_at: {
    type: DataTypes.DATE,
    defaultValue: Sequelize.fn('NOW'),
    allowNull: false,
  }
}, {
  sequelize, 
  modelName: 'PaymentItems',
  tableName: 'payment_items',
  timestamps: true,
  underscored: true,
});

export { PaymentItems };

