const router = require('express').Router();
const listingRoutes = require('../controllers/listingRoutes.js');
router.use('/', listingRoutes);
module.exports = router;
