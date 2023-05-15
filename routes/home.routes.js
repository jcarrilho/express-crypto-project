const router = require('express').Router()

// Create Home/SignUp page
router.get('/home-signup', (req,res)=> {
    res.render('pages/signup.hbs')
});

// Redirect button to Login page
router.post('/home-signup', (req,res)=>{
    res.redirect('/login')
});

// Create LogIn page
router.get('/login', (req,res)=>{
    res.render('pages/login.hbs')
});


module.exports = router;