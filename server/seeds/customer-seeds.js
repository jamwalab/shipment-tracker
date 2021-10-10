const {Customer} = require('../models');

const customerData = [
  {
    customer_name: "AGold",
  },
  {
    customer_name: "GlobalSS",
  },
  {
    customer_name: "SteelS",
  },
  {
    customer_name: "MeAndMy",
  },
  {
    customer_name: "DrMarten",
  },
  {
    customer_name: "FTSyn",
  },
  {
    customer_name: "GoodS",
  },
  {
    customer_name: "FlapJ",
  } 
];

const seedCustomer = () => Customer.bulkCreate(customerData);

module.exports = seedCustomer;