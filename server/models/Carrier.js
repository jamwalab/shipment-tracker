const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

// create carrier model
class Carrier extends Model {}

Carrier.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    carrier_name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    carrier_url: {
      type: DataTypes.STRING
    }
  },
  {
    sequelize,
    freezeTableName: true,
    underscored: true,
    modelName: 'carrier'
  }
);

module.exports = Carrier;