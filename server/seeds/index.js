const seedCustomer = require('./customer-seeds');
const seedCarrier = require('./carrier-seeds');
const seedStatus = require('./status-seeds');
const seedUser = require('./user-seeds');
const seedSublocation = require('./sublocation-seeds');

const sequelize = require('../config/connection');

const seedAll = async () => {
  await sequelize.sync({force: true});
  console.log('\n----DATABASE SYNCED----\n');
  await seedCustomer();
  console.log('\n----CUSTOMER SYNCED----\n');
  await seedCarrier();
  console.log('\n----CARRIER SYNCED----\n');
  await seedStatus();
  console.log('\n----STATUS SYNCED----\n');
  await seedSublocation();
  console.log('\n----USER SYNCED----\n');
  await seedUser();
  console.log('\n----USER SYNCED----\n');

  process.exit(0);
};

seedAll();