



import { Model } from "sequelize";

module.exports = (sequelize, DataTypes) => {
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
    // Other model options go here
    sequelize, // We need to pass the connection instance
    modelName: 'PaymentMethods'
  });
  return PaymentMethods;
}

