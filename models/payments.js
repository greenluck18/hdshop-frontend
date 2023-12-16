
import { Model } from "sequelize";

module.exports = (sequelize, DataTypes, Deferrable) => {
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
    userId: {
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
    modelName: 'Payments'
  });
  return Payments;
}

