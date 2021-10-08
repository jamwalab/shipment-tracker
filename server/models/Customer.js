const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

// create customer model
class Customer extends Model {}

Customer.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    customer_name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    customer_contact: {
      type: DataTypes.STRING
    }
  },
  {
    sequelize,
    freezeTableName: true,
    underscored: true,
    modelName: 'customer'
  }
);

module.exports = Customer;