const express = require('express');
const router = express.Router();

// Importing the fetchCryptoData function from coinGeckoAPI.js

// WE HAVE TO ADD IT FIRST
const fetchCryptoData = require('./coinGeckoAPI');

router.get('/list', async (req, res) => {
  try {
    const crypto = await fetchCryptoData();
    res.render('crypto-list', { crypto });
  } catch (error) {
    console.error('Error fetching crypto data:', error);
    res.status(500).send('Error fetching crypto data');
  }
});

router.get('/dashboard', (req, res) => {
  // Retrieving the user's favorite crypto from the database
  const favorites = [];

  res.render('dashboard', { dashboard });
});

module.exports = router;
