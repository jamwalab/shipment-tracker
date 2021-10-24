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
    //customer for the shipment
    customer_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'customer',
        key: 'id'
      }
    },
    //notes for shipment
    notes: {
      type: DataTypes.TEXT
    },
    //shipment PO
    po: {
      type: DataTypes.STRING
    },
    //shipment BL
    bl: {
      type: DataTypes.STRING
    },
    //shipment containers
    container: {
      type: DataTypes.TEXT
    },
    //shipment carrier
    carrier_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'carrier',
        key: 'id'
      }
    },
    //shipment vessel
    vessel_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'vessel',
        key: 'id'
      }
    },
    //shipment port
    port_id: {
      type: DataTypes.STRING
    },
    //Sublocation
    sublocation_id: {
      type: DataTypes.STRING
    },
    //ETA at port
    portEta: {
      type: DataTypes.DATE
    },
    //Eta final destination
    destEta: {
      type: DataTypes.DATE
    },
    //Entry submitted on
    submitted: {
      type: DataTypes.DATE
    },
    //entry releasesd on
    release: {
      type: DataTypes.DATE
    },
    //additional comments
    comment: {
      type: DataTypes.TEXT
    },
    //shipment status
    status_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'status',
        key: 'id'
      }
    },
    //Broker id
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