const router = require('express').Router();

const apiRoutes = require('./api');

router.use('/api', apiRoutes);

//If endpoint doesn't exist, return 404
router.use((req, res) => {
  res.status(404).end();
});

module.exports = router;