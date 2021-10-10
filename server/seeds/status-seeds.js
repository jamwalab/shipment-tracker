const {Status} = require('../models');

const statusData = [
  {
    status_text: "Waiting",
  },
  {
    status_text: "Manifest",
  },
  {
    status_text: "Check",
  },
  {
    status_text: "Release",
  },
  {
    status_text: "Archive",
  }
];

const seedStatus = () => Status.bulkCreate(statusData);

module.exports = seedStatus;