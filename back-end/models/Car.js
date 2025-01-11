const mongoose = require('mongoose');

const carSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        trim: true
    },
    make: {
        type: String,
        required: true,
        trim: true
    },
    model: {
        type: String,
        required: true,
        trim: true
    },
    year: {
        type: Number,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    mileage: {
        type: Number,
        required: true
    },
    location: {
        type: String,
        required: true,
        trim: true
    },
    description: {
        type: String,
        required: true,
        trim: true
    },
    features: [{
        type: String,
        trim: true
    }],
    images: [{
        type: String,
        required: true
    }],
    condition: {
        type: String,
        required: true,
        enum: ['New', 'Like New', 'Excellent', 'Good', 'Fair', 'Poor']
    },
    transmission: {
        type: String,
        required: true,
        enum: ['Automatic', 'Manual']
    },
    fuelType: {
        type: String,
        required: true,
        enum: ['Petrol', 'Diesel', 'Electric', 'Hybrid']
    },
    owner: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'User'
    }
}, {
    timestamps: true
});

// Add text index for search functionality
carSchema.index({ 
    title: 'text', 
    make: 'text', 
    model: 'text', 
    description: 'text' 
});

const Car = mongoose.model('Car', carSchema);
module.exports = Car;
