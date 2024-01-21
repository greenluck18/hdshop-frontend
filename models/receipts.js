import { sequelize } from '../db.js';
import { DataTypes, Model } from 'sequelize';

class Receips extends Model {
  paymentId
}
Receips.init({
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
  // Other model options go here
  sequelize, // We need to pass the connection instance
  modelName: 'Receips',
  taleName : 'receipts',
  timestamps: true,
  underscored: true
});

export { Receips };





