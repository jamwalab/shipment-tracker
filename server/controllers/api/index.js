const router = require('express').Router();

const user = require('./user-routes');
const shipment = require('./shipment-routes');
const carrier = require('./carrier-routes')

router.use('/user', user);
router.use('/shipment', shipment);
router.use('/carrier', carrier);

module.exports = router;