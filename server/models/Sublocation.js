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
    //sublocation code
    sublocation_code: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    //sublocation contact
    sublocation_email: {
      type: DataTypes.STRING
    },
    //URL if applicable
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