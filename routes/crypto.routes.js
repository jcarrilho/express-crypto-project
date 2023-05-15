const router = require('express').Router()


// Importing the fetchCryptoData function from coinGeckoAPI.js

// WE HAVE TO ADD IT FIRST
// const fetchCryptoData = require('./coinGeckoAPI');

router.get('/list', (req,res)=>{
  res.render('pages/crypto-list.hbs')
});
  /* try {
    const crypto = await fetchCryptoData();
  } catch (error) {
    console.error('Error fetching crypto data:', error);
    res.status(500).send('Error fetching crypto data');
  } */


 router.get('/dashboard', (req, res) => {
  // Retrieving the user's favorite crypto from the database

  res.render('pages/dashboard');
}); 

module.exports = router;
