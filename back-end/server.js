const express = require('express');
const app = express();
const mongoose  = require('mongoose');
require('dotenv').config();

const port = process.env.PORT || 3000;
const dbString = process.env.MONGODB_URI;

//Allow api to accept json data
app.use(express.json());

//Connect to database
mongoose.connect(dbString)
  .then(() => {
    console.log('Successfully connected to MongoDB Atlas!');
  })
  .catch((error) => {
    console.log('Unable to connect to MongoDB Atlas!');
    console.error(error);
  });


//car routes
const carRouter = require('./routes/car');
app.use('/cars', carRouter);

//user routes
const userRouter = require('./routes/user');
app.use('/users', userRouter);

//Simple get route
app.get('/', (req, res) => {
    res.send('Hello World!');
});

// Start the server and listen on the specified port
app.listen(port, () => {
    console.log(`Server is listening on port ${port}`);
});
