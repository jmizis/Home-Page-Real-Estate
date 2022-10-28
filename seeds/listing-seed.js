const { Listing } = require('../models');

const listingData = [
    {
        address: '5401 Coble Square PL Canal Winchester, OH 43110',
        price: '285,500',
        description: '4 Beds, 3 Baths, 1,740 sqft',
    }
    
]






















const seedProducts = () => Listing.bulkCreate(listingData);

module.exports = seedProducts;
