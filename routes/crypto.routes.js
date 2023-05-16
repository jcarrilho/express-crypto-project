const router = require('express').Router()

const Crypto = require('../models/Crypto.model')

const User = require('../models/User.model')




/* router.get('/list', (req,res)=>{
  res.render('pages/crypto-list.hbs')
}) */

router.get('/list', (req, res) => {
  async function findAllCryptosFromDb() {
    try {
      // Find all the cryptos inside the collection 
      let allCryptosFromDb = await Crypto.find();

      // Feedback regarding to found cryptos
      // console.log('Retrieved cryptos from DB:', allCryptosFromDb);

      // Render all cryptos from DB with hbs view
      res.render('pages/crypto-list.hbs', { cryptos: allCryptosFromDb });
    }
    catch (error) {
      console.log(error);
    }
  }
  findAllCryptosFromDb();
});

/* router.get('/list/:id', async (req,res)=>{
  const cryptoId=req.params.id;
  let user = req.session.currentUser;

  const checkUser = await User.findById(user).populate('portfolio');

  const checkCrypto = await Crypto.findOne({cryptoId}).populate('portfolio');

  const isFavorite =
  // check later
  checkUser.portfolio.filter((crypto)=> crypto.cryptoId === cryptoId)
  .length === 0
  ? false
  : true
})  */



router.post('/list/:cryptoId', async (req, res) => {
  const { cryptoId } = req.params;
  const userId = req.session.currentUser._id;

  console.log(userId);

  try {
    // Find the user based on the userId
    const user = await User.findById(userId);

    // Find the crypto based on the cryptoId
    const crypto = await Crypto.findById(cryptoId);

    // Add the crypto to the user's favorite list

    await User.findByIdAndUpdate(user._id, { $push: { portfolio: crypto._id } });

    res.redirect('/list');
  } catch (error) {
    console.log(error);
    res.status(500).send('Internal Server Error');
  }
});


router.get('/dashboard', async (req, res) => {
  // Retrieving the user's favorite crypto from the database


  res.render('pages/dashboard');
});




module.exports = router;
