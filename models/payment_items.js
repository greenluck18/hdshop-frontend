
import { Model } from "sequelize";

module.exports = (sequelize, DataTypes, Deferrable) => {
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
      references: { model: 'payments', key: 'id', deferrable: Deferrable.INITIALLY_IMMEDIATE }
    },
    item_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: { model: 'items', key: 'id', deferrable: Deferrable.INITIALLY_IMMEDIATE }
    }
  }, {
    // Other model options go here
    sequelize, // We need to pass the connection instance
    modelName: 'PaymentItems'
  });
  return PaymentItems;
}

