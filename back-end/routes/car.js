const express = require('express');
const router = express.Router();
const CarModel = require('../models/CarModel');

// Get all cars
router.get('/', async (req, res) => {
    try {
        const cars = await CarModel.find();
        res.json(cars);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// Get a single car
router.get('/:id', getCars, (req, res) => {
    res.json(res.car);
});


// Create a new car
router.post('/', async (req, res) => {
    const car = new CarModel({
        carName: req.body.carName,
        model: req.body.model,
        bodyType: req.body.bodyType,
        price: req.body.price,
        mileage: req.body.mileage,
        gearType: req.body.gearType,
        fuelType: req.body.fuelType,
        engine: req.body.engine,
        engineSize: req.body.engineSize,
        power: req.body.power,
        fuelCons: req.body.fuelCons,
        seats: req.body.seats,
        year: req.body.year,
        location: req.body.location,
        drive: req.body.drive,
        sellerType: req.body.sellerType,
        vehicleType: req.body.vehicleType,
    });
    car.save().then(
        () => {
          res.status(201).json({
            message: 'Post saved successfully!'
          });
        }
      ).catch(
        (error) => {
          res.status(400).json({
            error: error
          });
        }
      );
});

// Update a car
router.put('/:id', getCars, async (req, res) => {

    const carProperties = [
        'carName', 'model', 'bodyType', 'price', 'mileage', 'gearType', 'fuelType',
        'engine', 'engineSize', 'power', 'fuelCons', 'seats', 'year', 'location',
        'drive', 'sellerType', 'vehicleType'
    ];

    if (req.body) { // Check if req.body exists to avoid potential errors
        carProperties.forEach(property => {
            if (req.body[property] !== null) {
                res.car[property] = req.body[property];
            }
        });
    } else {
        // Handle the case where req.body is missing (optional)
        console.error('req.body is missing in the request');
    }

    try {
        const updatedCar = await res.car.save();
        res.json(updatedCar);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

// Delete a user
router.delete('/:id', getCars, async (req, res) => {
    try {
        await res.car.remove();
        res.json({ message: 'Car deleted' });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

async function getCars(req, res, next) {
    let car;
    try {
        car = await CarModel.findById(req.params.id);
        if (car == null) {
            return res.status(404).json({ message: 'Cannot find car' });
        }
    } catch (err) {
        return res.status(500).json({ message: err.message });
    }

    res.car = car;
    next();
}

module.exports = router;


