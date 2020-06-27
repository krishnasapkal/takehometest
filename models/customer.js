'use strict';
const {
  Model, Transaction
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Customer extends Model {
    static associate(models) {
      // define association here
      Customer.hasMany(models.Transaction, {
        foreignKey: { name: 'FromAccount' }
      })

      Customer.hasMany(models.Transaction, {
        foreignKey: { name: 'ToAccount' }
      })
    }
  };
  Customer.init({
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true
    },
    Account: {
      type: DataTypes.NUMBER,
      unique: true,
      allowNull: false
    },
    Name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    Address: {
      type: DataTypes.STRING,
      allowNull: false
    },
    PhoneNumber: {
      type: DataTypes.NUMBER,
      allowNull: false
    }
  }, {
    sequelize,
    modelName: 'Customer',
  });
  return Customer;
};