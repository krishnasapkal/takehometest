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
    Account: DataTypes.NUMBER,
    Name: DataTypes.STRING,
    Address: DataTypes.STRING,
    PhoneNumber: DataTypes.NUMBER
  }, {
    sequelize,
    modelName: 'Customer',
  });
  return Customer;
};