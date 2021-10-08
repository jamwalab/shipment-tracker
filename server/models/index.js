const Carrier = require('./Carrier');
const Customer = require('./Customer');
const Shipment = require('./Shipment');
const Status = require('./Status');
const Sublocation = require('./Sublocation');
const Port = require('./Port');
const User = require('./User');

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

//Associations between Shipment and Port
Shipment.belongsTo(Port, {
  foreignKey: 'port_id'
});

Port.hasMany(Shipment, {
  foreignKey: 'port_id'
});

//Associations between Shipment and Sublocation
Shipment.belongsTo(Sublocation, {
  foreignKey: 'sublocation_id'
});

Sublocation.hasMany(Shipment, {
  foreignKey: 'sublocation_id'
});

module.exports = {Carrier, Customer, Shipment, Status, Sublocation, User}