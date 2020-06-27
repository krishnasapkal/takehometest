'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Transaction extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Transaction.init({
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true
    },
    TransactionId: {
      type: DataTypes.STRING,
      unique: true,
      allowNull: false
    },
    TransactionDate: {
      type: DataTypes.DATE,
      allowNull: false
    },
    FromAccount: {
      type: DataTypes.NUMBER,
      allowNull: false
    },
    ToAccount: {
      type: DataTypes.NUMBER,
      allowNull: false
    },
    Amount: {
      type: DataTypes.NUMBER,
      allowNull: false
    }
  }, {
    sequelize,
    modelName: 'Transaction',
  });
  return Transaction;
};