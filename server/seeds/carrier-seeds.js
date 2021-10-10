const {Carrier} = require('../models');

const carrierData = [
  {
    carrier_name: "MSC",
  },
  {
    carrier_name: "Maersk",
  },
  {
    carrier_name: "Others",
  }
];

const seedCarrier = () => Carrier.bulkCreate(carrierData);

module.exports = seedCarrier;