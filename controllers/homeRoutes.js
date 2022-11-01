const { application } = require('express');

const router = require('express').Router();

router.get('/', (req, res, next) => {
  console.log('router working');

  res.render('home', { layout: 'main' });
});

router.get('/login', (req, res, next) => {
  console.log('router working');

  res.render('login', { layout: 'main' });
});

router.get('/register', (req, res, next) => {
  console.log('router working');

  res.render('register', { layout: 'main' });
});

router.get('/listing', (req, res, next) => {
  console.log('router working');

  res.render('listing', { layout: 'main' });
});

module.exports = router;
