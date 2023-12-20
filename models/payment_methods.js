
import { sequelize } from '../db.js';
import { DataTypes, Model } from 'sequelize';

class PaymentMethods extends Model {
  paymentMethodId;
  paymentMethodName
}
PaymentMethods.init({
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  }
}, {
  sequelize, 
  modelName: 'PaymentMethods',
  tableName: 'payment_methods',
  timestamps: true,
  underscored: true,
});

export { PaymentMethods };
