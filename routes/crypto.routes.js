const router = require('express').Router()

const Crypto = require('../models/Crypto.model')


// Importing the fetchCryptoData function from coinGeckoAPI.js

// WE HAVE TO ADD IT FIRST
async function logJSONData() {
  const response = await fetch("https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=25&page=1&sparkline=false&price_change_percentage=1h%2C24h%2C7d&locale=en");

  const jsonData = await response.json();
  //console.log(jsonData);
}

router.get('/list', async (req,res)=>{
  res.render('pages/crypto-list.hbs')
  try {
    const crypto = await logJSONData();
  } catch (error) {
    console.error('Error fetching crypto data:', error);
    res.status(500).send('Error fetching crypto data');
  }
  logJSONData()
});


 router.get('/dashboard', (req, res) => {
  // Retrieving the user's favorite crypto from the database

  res.render('pages/dashboard');
}); 

module.exports = router;
