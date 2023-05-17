const router = require('express').Router()

const Crypto = require('../models/Crypto.model')

const User = require('../models/User.model')


// Create crypto
router.post('/list', async (req, res) => {
  const { id, symbol, name, image } = req.body;

  try {
    const crypto = await Crypto.create({ id, symbol, name, image });

    res.redirect('/list');
  } catch (error) {
    console.log(error);
    res.status(500).send('Internal Server Error');
  }
});

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

router.post('/delete/:cryptoId', async (req, res) => {
  try {
    const { cryptoId } = req.params;

    // Find the crypto based on the cryptoId
    const crypto = await Crypto.findByIdAndDelete(cryptoId);

    res.redirect('/list');
  } catch (error) {
    console.log(error);
    res.status(500).send('Internal Server Error');
  }
});


router.get('/dashboard', async (req, res) => {
  try {
    // Retrieve the user's favorite cryptos from the database
    const userId = req.session.currentUser._id;
    const user = await User.findById(userId).populate('portfolio');
    
    res.render('pages/dashboard', { user });
  } catch (error) {
    // console.log(error);
    res.status(500).send('Internal Server Error');
  }
});

router.post('/dashboard/:cryptoId', async (req, res) => {
  const { cryptoId } = req.params;
  const userId = req.session.currentUser._id;

  // console.log(userId);

  try {
    // Find the user based on the userId
    const user = await User.findById(userId);

    // Find the crypto based on the cryptoId
    const crypto = await Crypto.findById(cryptoId);

    // Remove the crypto to the user's favorite list

    await User.findByIdAndUpdate(user._id, { $pull: { portfolio: crypto._id } });

    res.redirect('/dashboard');
  } catch (error) {
    console.log(error);
    res.status(500).send('Internal Server Error');
  }
});





module.exports = router;
