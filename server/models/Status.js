const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

// create status model
class Status extends Model {}

Status.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    //Status text
    status_text: {
      type: DataTypes.STRING,
      allowNull: false
    }
  },
  {
    sequelize,
    freezeTableName: true,
    underscored: true,
    modelName: 'status'
  }
);

module.exports = Status;