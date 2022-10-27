const router = require('express').Router();
const listingRoutes = require('./listingRoutes');


router.use('/', listingRoutes);

module.exports = router;