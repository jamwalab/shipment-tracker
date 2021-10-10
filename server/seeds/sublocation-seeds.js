const {Sublocation} = require('../models');

const sublocationData = [
  {
    sublocation_code: "3037",
  },
  {
    sublocation_code: "4222",
  }
];

const seedSublocation = () => Sublocation.bulkCreate(sublocationData);

module.exports = seedSublocation;