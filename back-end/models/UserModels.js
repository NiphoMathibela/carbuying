const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: {type: String},
    lastName: {type: String},
    email: {type: String, required: true, unique: true},
    userType: {type: String},
    _id: { type: mongoose.Schema.Types.ObjectId, required: true }
});

module.exports = mongoose.model('Users', userSchema);