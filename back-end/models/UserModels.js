const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: {type: String},
    lastName: {type: String},
    email: {type: String},
    userType: {type: String},
});

module.exports = mongoose.model('Users', userSchema);