const router = require('express').Router();
const { Login } = require('../models');
const withAuth = require('../utils/auth');

// Prevent non logged in users from viewing the listing page
router.get('/', withAuth, async (req, res) => {
  try {
    const userData = await Login.findAll({
      attributes: { exclude: ['password'] },
      order: [['name', 'ASC']],
    });

    const users = userData.map((project) => project.get({ plain: true }));
    //this a place holder...
    res.render('listing', {
      users,
      // Pass the logged in flag to the template
      logged_in: req.session.logged_in,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/login', (req, res) => {
  // If a session exists, redirect the request to the listing
  if (req.session.logged_in) {
    //this path is place holder it can be changed
    res.redirect('/listing');
    return;
  }

  res.render('login');
});

module.exports = router;
