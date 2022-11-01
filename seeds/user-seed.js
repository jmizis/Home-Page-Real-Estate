const { User} = require('../models');

const userData = [
    {
        "name": "John",
        "email": "john@hotmail.com",
        "password": "pass12345"
      },
      {
        "name": "Alex",
        "email": "alex@hotmail.com",
        "password": "pass12345"
      },
      {
        "name": "Nick",
        "email": "nick@hotmail.com",
        "password": "pass12345"
      },
      {
        "name": "Jordan",
        "email": "jordan99@hotmail.com",
        "password": "pass12345"
      },
      {
        "name": "Ryan",
        "email": "the_ryan@hotmail.com",
        "password": "pass12345"
      }

]












const seedUser = () => User.bulkCreate(userData);

module.exports = seedUser;
