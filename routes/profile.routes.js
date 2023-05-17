const router = require('express').Router()


router.get('/user-profile', (req,res)=>{
    res.render('pages/profile.hbs', {userInSession: req.session.currentUser})
  });


  
router.post('/user-profile', (req,res)=>{
  
    res.redirect('pages/signup.hbs')
  });








  module.exports = router;
