const { application } = require('express');

const router = require('express').Router();

router.get('/homepage', (req, res, next) => {
  console.log('router working');

  res.render('homepage', { layout: 'main' });
});


router.get('/about', (req, res, next) => {
  console.log('router working');

  res.render('about', { layout: 'main' });
});

router.get('/buyers', (req, res, next) => {
  console.log('router working');

  res.render('buyers', { layout: 'main' });
});

router.get('/login', (req, res, next) => {
  console.log('router working');

  res.render('login', { layout: 'main' });
});

router.get('/register', (req, res, next) => {
  console.log('router working');

  res.render('register', { layout: 'main' });
});
router.get('/page', (req, res, next) => {
  console.log('router working');

  res.render('page', { layout: 'main' });
});

module.exports = router;
