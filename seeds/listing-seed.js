const { Listing } = require('../models');

const listingData = [
    {
        address: '5401 Coble Square PL Canal Winchester, OH 43110',
        price: '285,500',
        description: '4 Beds, 3 Baths, 1,740 sqft', 
    },
    {
        address: '4399 McNamara Place lewis Center OH 43035',
        price: '625,000',
        description: '4 Beds, 5 Baths, 4,150 sqft', 
    },
    
    {
        address: '9155 Parkbury Ln Lewis Center, OH 43035',
        price: '215,000',
        description: '2 Beds, 3 Baths, 1,024 sqft', 
    },

    {
        address: '5066 Singleton Dr #28-A Hilliard, OH 43026',
        price: '175,000',
        description: '2 Beds, 2 Baths, 1,187 sqft', 
    },

    {
        address: '904 Studer Ave Columbus, OH 43206',
        price: '225,000',
        description: '3 Beds, 2 Baths, 1,364 sqft', 
    },

    {
        address: '13334 Pine Rd NE Thornville, OH 43076',
        price: '315,000',
        description: '3 Beds, 2 Baths, 1,420 sqft',   

    }
    
]






















const seedListing = () => Listing.bulkCreate(listingData);

module.exports = seedListing;
