Project Name – ExpressCrypto

Description: Online Portfolio to display your favorites cryptos

User Stories

404 - As a user I want to see a nice 404 page when I go to a page that doesn’t exist so that I know it was my fault

500 - As a user I want to see a nice error page when the super team screws it up so that I know that is not my fault
Homepage – Login/Signup 

Our Home Page will be the login/signup options. We decided to do it because it will be more intuitive to the user

Logout – It will be present in every page after login

Coin List – Will have a search bar. The user will have the option to select their favorite coins with previous basic information to add to the portfolio.  It will have a add to list button and redirect to portfolio button 

Dashboard – It will include fav coins list, news section and graphic/info section 

Models – {
  name: String,

  email: String,

  password: String,

}

Favorites model

{

  favorites: [coinId],

}

API’S links:  ex. Coingecko

Npm packages – express, mongoose, handlebars

Github repo link

https://github.com/jcarrilho/express-crypto-project