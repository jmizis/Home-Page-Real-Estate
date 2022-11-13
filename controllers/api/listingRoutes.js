const express = require('express');
const router = require('express').Router();
const withAuth = require('../../utils/auth');

//...code

router.get('/listings', (req, res, next) => {
  console.log('router working');

  res.render('listings', { layout: 'main' });
});

// module.exports = router;
module.exports = router;
