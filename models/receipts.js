
import { Model } from "sequelize";

module.exports = (sequelize, DataTypes) => {
  class Receips extends Model {
    receiptId;
    receiptName
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
    modelName: 'Receips'
  });
  return Receips;
}

