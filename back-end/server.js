const express = require('express');
const mongoose  = require('mongoose');
const cors = require('cors');
require('dotenv').config();
const User = "./models/UserModel";

const port = process.env.PORT || 5000;
const dbString = process.env.MONGODB_URI;

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Connect to database
mongoose.connect(dbString, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false
}).then(() => {
    console.log('Connected to MongoDB');
}).catch((error) => {
    console.error('Error connecting to MongoDB:', error.message);
});

//car routes
const carRouter = require('./routes/car');
app.use('/api/cars', carRouter);

//user routes
const userRouter = require('./routes/user');
app.use('/api/users', userRouter);

// Error handling middleware
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Something broke!');
});

//Simple get route
app.get('/', (req, res) => {
    res.send('Hello World!');
});

// Start the server and listen on the specified port
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
