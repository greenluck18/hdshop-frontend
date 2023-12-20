
import { sequelize } from '../db.js';
import { DataTypes, Model } from 'sequelize';

class Users extends Model {
  userId
}

Users.init({
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  first_name: DataTypes.STRING,
  last_name: DataTypes.STRING,
  email: DataTypes.STRING,
  login: DataTypes.STRING,
  password: DataTypes.STRING,
  created_at: DataTypes.DATE,
  updated_at: DataTypes.DATE,
}, {
  // Other model options go here
  sequelize, // We need to pass the connection instance
  modelName: 'Users',
  tableName: 'users',
  timestamps: true,
  underscored: true,
});

export { Users };
