const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

// create carrier model
class Sublocation extends Model {}

Sublocation.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    sublocation_code: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    sublocation_email: {
      type: DataTypes.STRING
    },
    sublocation_url: {
      type: DataTypes.STRING
    }
  },
  {
    sequelize,
    freezeTableName: true,
    underscored: true,
    modelName: 'sublocation'
  }
);

module.exports = Sublocation;