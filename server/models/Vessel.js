const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

// create carrier model
class Vessel extends Model {}

Vessel.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    //Vessel name
    vessel_name: {
      type: DataTypes.INTEGER,
    },
    //Vessel current ETA
    vessel_eta: {
      type: DataTypes.STRING
    }
  },
  {
    sequelize,
    freezeTableName: true,
    underscored: true,
    modelName: 'vessel'
  }
);

module.exports = Vessel;