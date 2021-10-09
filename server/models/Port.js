const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

// create carrier model
class Port extends Model {}

Port.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    //Port code
    port_code: {
      type: DataTypes.STRING,
      allowNull: false
    },
    //port CBSA email
    port_email: {
      type: DataTypes.STRING
    }
  },
  {
    sequelize,
    freezeTableName: true,
    underscored: true,
    modelName: 'port'
  }
);

module.exports = Port;