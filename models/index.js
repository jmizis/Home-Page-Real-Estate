const Listing = require('./listing');
const Login = require('./login');
const User = require('./user');

Listing.belongsTo(User);
// NEED To complete this
User.hasMany(Listing);

module.exports = { Listing, Login, User };
