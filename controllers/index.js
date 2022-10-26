const router = require('express').Router();

const loginRoutes = require('./login');
const homeRoutes = require('./');
const buyerRoutes = require('./buyer');
const sellerRoutes = require('./seller')



router.use('/', homeRoutes);
router.use('/login', loginRoutes);
router.use('/buyer', buyerRoutes);
router.use('/seller', sellerRoutes);

module.exports = router;