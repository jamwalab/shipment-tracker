const {User} = require('../models');

const userData = [
  {
    username: "AAF",
    email: "abhishek.jamwal@lns.maersk.com",
    password: "password"
  }
];

const seedUser = () => User.bulkCreate(userData);

module.exports = seedUser;