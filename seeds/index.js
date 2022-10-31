const seedListing = require('./listing-seeds');
const seedUser = require('./user-seeds');


const sequelize = require('../config/connection');

const seedAll = async () => {
    await sequelize.sync({ force: true });
    console.log('\n----- DATABASE SYNCED -----\n');
    
    await seedListing();
    console.log('\n----- LISTING SEEDED -----\n');
  
    await seedUser();
    console.log('\n----- USER SEEDED -----\n')

};

seedAll();