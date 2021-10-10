const router = require('express').Router();
const {Carrier} = require('../../models');

//----GET - FIND ALL CARRIERS----//
router.get('/', (req, res) => {
  Carrier.findAll({})
  .then(dbCarrierData => res.json(dbCarrierData))
  .catch(err => {
    console.log(err);
    res.status(500).json(err)
  });
});

module.exports = router;