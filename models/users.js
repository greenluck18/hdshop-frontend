
import { Sequelize, DataTypes, Model  } from "sequelize";

const sequelize = new Sequelize('sqlite::memory:', {
  define: {
    freezeTableName: true
  }
});

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
  email: DataTypes.STRING
}, {
  // Other model options go here
  sequelize, // We need to pass the connection instance
  modelName: 'Users'
});

export { Users };
