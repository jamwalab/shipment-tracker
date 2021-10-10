const router = require('express').Router();
const {User} = require('../../models');

//----GET - FIND ALL USERS----//
router.get('/', (req, res) => {
  User.findAll({
    //attributes: {exclude: ['password']}
  })
  .then(dbUserData => res.json(dbUserData))
  .catch(err => {
    console.log(err);
    res.status(500).json(err)
  });
});

module.exports = router;