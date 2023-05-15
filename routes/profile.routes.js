const router = require('express').Router()


router.get('/user-profile', (req,res)=>{
    res.render('pages/profile.hbs')
  });

router.post('/user-logout', (req,res)=>{
    res.redirect('pages/signup.hbs')
  });








  module.exports = router;
