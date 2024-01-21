import { sequelize } from '../db.js';
import { DataTypes, Model, Deferrable } from 'sequelize';

class Payments extends Model {
  paymentId
}
Payments.init({
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  payment_method_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: { model: 'payment_methods', key: 'id', deferrable: Deferrable.INITIALLY_DEFERRED }
  },
  user_Id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: { model: 'users', key: 'id', deferrable: Deferrable.INITIALLY_DEFERRED }
  },
  amount: {
    type: DataTypes.FLOAT,
    allowNull: false,
  },
  receipt_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: { model: 'receipts', key: 'id', deferrable: Deferrable.INITIALLY_DEFERRED }
  }
}, {
  // Other model options go here
  sequelize, // We need to pass the connection instance
  modelName: 'Payments',
  tableName: 'payments',
  timestamps: true,
  underscored: true,
});

export { Payments };




