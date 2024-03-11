const mongoose = require('mongoose');

const carSchema = new mongoose.Schema({
    carName: {type: String},
    brand: { type: String },
    model: { type: String },
    bodyType: { type: String },
    price: { type: String }, // Consider using Number for price if appropriate
    mileage: { type: String }, // Consider using Number for mileage if it represents a numerical value
    gearType: { type: String },
    fuelType: { type: String },
    engine: { type: String },
    engineSize: { type: String },
    power: { type: String }, // Consider using Number for power if it represents a numerical value
    fuelCons: { type: String }, // Might be more accurate as Number depending on representation
    seats: { type: String }, // Consider using Number for seats if it represents a specific number
    year: { type: String }, // Consider using Number for year if it's strictly numerical
    location: { type: String },
    drive: { type: String },
    sellerType: { type: String },
    vehicleType: { type: String },
});

module.exports = mongoose.model('Cars', carSchema);