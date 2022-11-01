const router = require('express').Router();
const loginRoutes = require('./loginRoutes');
const registerRoutes = require('./registerRoutes');
const listingRoutes = require('./listingRoutes');
const userRoutes = require('./userRoutes');
// API routes posts, puts and deletes
// api/users/login
router.use('/users/login', loginRoutes);
// api/register
router.use('/register', registerRoutes);
//api/listing
router.use('/listing', listingRoutes);
// api/users
router.use('/users', userRoutes);

module.exports = router;
