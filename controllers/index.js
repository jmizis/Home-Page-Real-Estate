const router = require('express').Router();

const homeRoutes = require('./homeRoutes');

const apiRoutes = require('./api/');

//it makes our homes available -views (tend to be get routes)
router.use('/', homeRoutes);

//api folder enables our api /data routes like posts, puts and deletes
//adds "/api" to endpoint which enables api routes
router.use('/api', apiRoutes);

module.exports = router;
