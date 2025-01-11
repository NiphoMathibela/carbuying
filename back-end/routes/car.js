const express = require('express');
const router = express.Router();
const CarModel = require('../models/CarModel');
const auth = require('../middleware/auth');
const multer = require('multer');
const { CloudinaryStorage } = require('multer-storage-cloudinary');
const cloudinary = require('../config/cloudinary');

// Configure Cloudinary storage
const storage = new CloudinaryStorage({
    cloudinary: cloudinary,
    params: {
        folder: 'car-images',
        allowed_formats: ['jpg', 'jpeg', 'png']
    }
});

const upload = multer({ storage: storage });

// Create a new car listing
router.post('/', auth, upload.array('images', 10), async (req, res) => {
    try {
        const imageUrls = req.files.map(file => file.path);
        const carData = {
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
            images: imageUrls,
            owner: req.user._id,
            createdAt: new Date()
        };

        const car = new CarModel(carData);
        await car.save();
        res.status(201).send(car);
    } catch (error) {
        res.status(400).send(error);
    }
});

// Get all cars with filtering, sorting, and pagination
router.get('/', async (req, res) => {
    try {
        const match = {};
        const sort = {};
        
        // Filter options
        if (req.query.make) match.make = req.query.make;
        if (req.query.model) match.model = req.query.model;
        if (req.query.minYear) match.year = { $gte: parseInt(req.query.minYear) };
        if (req.query.maxYear) match.year = { ...match.year, $lte: parseInt(req.query.maxYear) };
        if (req.query.minPrice) match.price = { $gte: parseInt(req.query.minPrice) };
        if (req.query.maxPrice) match.price = { ...match.price, $lte: parseInt(req.query.maxPrice) };
        if (req.query.condition) match.condition = req.query.condition;
        if (req.query.transmission) match.transmission = req.query.transmission;
        if (req.query.fuelType) match.fuelType = req.query.fuelType;
        
        // Text search
        if (req.query.search) {
            match.$text = { $search: req.query.search };
        }
        
        // Sorting
        if (req.query.sortBy) {
            const parts = req.query.sortBy.split(':');
            sort[parts[0]] = parts[1] === 'desc' ? -1 : 1;
        }
        
        // Pagination
        const limit = parseInt(req.query.limit) || 10;
        const skip = parseInt(req.query.skip) || 0;
        
        const cars = await CarModel.find(match)
            .sort(sort)
            .limit(limit)
            .skip(skip)
            .populate('owner', 'name email');
            
        const total = await CarModel.countDocuments(match);
        
        res.send({
            cars,
            total,
            hasMore: total > skip + limit
        });
    } catch (error) {
        res.status(500).send(error);
    }
});

// Get car by ID
router.get('/:id', async (req, res) => {
    try {
        const car = await CarModel.findById(req.params.id).populate('owner', 'name email');
        if (!car) {
            return res.status(404).send();
        }
        res.send(car);
    } catch (error) {
        res.status(500).send(error);
    }
});

// Update car listing
router.patch('/:id', auth, upload.array('images', 10), async (req, res) => {
    const updates = Object.keys(req.body);
    const allowedUpdates = ['carName', 'model', 'bodyType', 'price', 'mileage', 'gearType', 'fuelType', 'engine', 'engineSize', 'power', 'fuelCons', 'seats', 'year', 'location', 'drive', 'sellerType', 'vehicleType'];
    const isValidOperation = updates.every((update) => allowedUpdates.includes(update));

    if (!isValidOperation) {
        return res.status(400).send({ error: 'Invalid updates!' });
    }

    try {
        const car = await CarModel.findOne({ _id: req.params.id, owner: req.user._id });
        
        if (!car) {
            return res.status(404).send();
        }

        if (req.files && req.files.length > 0) {
            const imageUrls = req.files.map(file => file.path);
            car.images = [...car.images, ...imageUrls];
        }

        updates.forEach((update) => car[update] = req.body[update]);
        car.updatedAt = new Date();
        await car.save();
        res.send(car);
    } catch (error) {
        res.status(400).send(error);
    }
});

// Delete car listing
router.delete('/:id', auth, async (req, res) => {
    try {
        const car = await CarModel.findOneAndDelete({ _id: req.params.id, owner: req.user._id });
        if (!car) {
            return res.status(404).send();
        }
        
        // Delete images from Cloudinary
        for (const imageUrl of car.images) {
            const publicId = imageUrl.split('/').pop().split('.')[0];
            await cloudinary.uploader.destroy(publicId);
        }
        
        res.send(car);
    } catch (error) {
        res.status(500).send(error);
    }
});

// Get user's car listings
router.get('/user/listings', auth, async (req, res) => {
    try {
        const cars = await CarModel.find({ owner: req.user._id });
        res.send(cars);
    } catch (error) {
        res.status(500).send(error);
    }
});

// Search cars
router.get('/search', async (req, res) => {
    try {
        const { query } = req.query;
        if (!query) {
            return res.status(400).json({ 
                status: 'error',
                message: 'Search query is required' 
            });
        }

        const cars = await CarModel.find({
            $or: [
                { carName: { $regex: query, $options: 'i' } },
                { model: { $regex: query, $options: 'i' } },
                { bodyType: { $regex: query, $options: 'i' } },
                { location: { $regex: query, $options: 'i' } }
            ]
        });

        res.json({
            status: 'success',
            results: cars.length,
            data: cars
        });
    } catch (err) {
        res.status(500).json({ 
            status: 'error',
            message: 'Error searching cars',
            error: err.message 
        });
    }
});

// Contact seller
router.post('/:id/contact', async (req, res) => {
    try {
        const { name, email, message } = req.body;
        
        if (!name || !email || !message) {
            return res.status(400).json({
                status: 'error',
                message: 'Name, email and message are required'
            });
        }

        const car = await CarModel.findById(req.params.id);
        if (!car) {
            return res.status(404).json({
                status: 'error',
                message: 'Car not found'
            });
        }

        // Here you would typically send an email to the seller
        // For now, we'll just return a success response
        res.json({
            status: 'success',
            message: 'Message sent successfully'
        });
    } catch (err) {
        res.status(500).json({
            status: 'error',
            message: 'Error sending message',
            error: err.message
        });
    }
});

module.exports = router;
