'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Transaction extends Model {
    static associate(models) {
      // define association here
      Transaction.belongsTo(models.Customer,{
        as : 'FromAccount',
        targetKey : 'Account'
      })

      Transaction.belongsTo(models.Customer,{
        as : 'ToAccount',
        targetKey : 'Account'
      })
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
    // FromAccount: {
    //   type: DataTypes.STRING,
    //   allowNull: false,
    //   references: {
    //     model : 'customers',
    //     key : 'Account'
    //   }
    // },
    // ToAccount: {
    //   type: DataTypes.STRING,
    //   allowNull: false,
    //   references: {
    //     model : 'customers',
    //     key : 'Account'
    //   }
    // },
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