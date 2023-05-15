require('config/session.config');
const UserModel = require('models/User.model');

const users = [{
    username: 'Lucas',
    email: 'lltelles@gmail.com',
    password: '123456'

}];


UserModel.insertMany(users)
.then(console.log("Success, inserted users"))
.catch(error => console.log(error))