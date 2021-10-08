const {Model, DataTypes} = require('sequelize');
const sequelize = require('../config/connection');

//Shipment model
class Shipment extends Model {};

Shipment.init(
  {
    //Id column of shipment table
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true
    },
    //Job number BYYZ
    job: {
      type: DataTypes.STRING,
      unique: true
    },

    customer_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'customer',
        key: 'id'
      }
    },
    notes: {
      type: DataTypes.TEXT
    },
    po: {
      type: DataTypes.STRING
    },
    bl: {
      type: DataTypes.STRING
    },
    container: {
      type: DataTypes.TEXT
    },
    carrier_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'carrier',
        key: 'id'
      }
    },
    port_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'port',
        key: 'id'
      }
    },
    sublocation_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'sublocation',
        key: 'id'
      }
    },
    portEta: {
      type: DataTypes.DATE
    },
    destEta: {
      type: DataTypes.DATE
    },
    submitted: {
      type: DataTypes.DATE
    },
    release: {
      type: DataTypes.DATE
    },
    comment: {
      type: DataTypes.TEXT
    },
    status_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'status',
        key: 'id'
      }
    },
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'user',
        key: 'id'
      }
    }
  },
  {
    sequelize,
    freezeTableName: true,
    underscored: true,
    modelName: 'shipment'
  }
);

module.exports = Shipment;