const express = require('express');
const router = require('express').Router();
const withAuth = require('../../utils/auth');

//...code

router.get('/listing', (req, res, next) => {
    console.log('router working');
  
    res.render('listing', { layout: 'main' });
  });
  
// module.exports = router;
module.exports = router;
