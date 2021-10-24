const Carrier = require('./Carrier');
const Customer = require('./Customer');
const Shipment = require('./Shipment');
const Status = require('./Status');
const User = require('./User');
const Vessel = require('./Vessel');

//Associations between User and Shipment
Shipment.belongsTo(User, {
  foreignKey: 'user_id'
});

User.hasMany(Shipment, {
  foreignKey: 'user_id'
});

//Associations between Shipment and Carrier
Shipment.belongsTo(Carrier, {
  foreignKey: 'carrier_id'
});

Carrier.hasMany(Shipment, {
  foreignKey: 'carrier_id'
});

//Associations between Shipment and Vessel
Shipment.belongsTo(Vessel, {
  foreignKey: 'vessel_id'
});

Vessel.hasMany(Shipment, {
  foreignKey: 'vessel_id'
});

//Associations between Shipment and Customer
Shipment.belongsTo(Customer, {
  foreignKey: 'customer_id'
});

Customer.hasMany(Shipment, {
  foreignKey: 'customer_id'
});

//Associations between Shipment and Status
Shipment.belongsTo(Status, {
  foreignKey: 'status_id'
});

Status.hasMany(Shipment, {
  foreignKey: 'status_id'
});


module.exports = {Carrier, Customer, Shipment, Status, User, Vessel}