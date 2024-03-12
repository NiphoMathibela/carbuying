const express = require('express');
const router = express.Router();
const User = require('../models/UserModels');


  // Get a single user
  router.get('/:email', async (req, res) => {
    try {
      const email = req.params.email;
  
      // Find user by email using Mongoose
      const user = await User.findOne({ email: email }); // Search by email field
  
      if (!user) {
        return res.status(404).send('User not found');
      }
  
      res.json(user);
    } catch (err) {
      console.error(err);
      res.status(500).send('Internal server error');
    }
  });


// Get all users
router.get('/', async (req, res) => {
    try {
      const users = await User.find();
      res.json(users);
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  });
  
  // Create a new user
  router.post('/', async (req, res) => {
    const user = new User({
      name: req.body.name,
      email: req.body.email,
      lastName: req.body.lastName,
      userType: req.body.userType,
    });
    user.save().then(
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
  
  // Update a user
  router.put('/:email', getUser, async (req, res) => {
    if (req.body.name != null) {
      res.user.name = req.body.name;
    }
  
    if (req.body.email != null) {
      res.user.email = req.body.email;
    }
  
    if (req.body.age != null) {
      res.user.age = req.body.age;
    }
  
    try {
      const updatedUser = await res.user.save();
      res.json(updatedUser);
    }catch (err) {
      res.status(400).json({ message: err.message });
      }
      });
      
      // Delete a user
      router.delete('/:email', getUser, async (req, res) => {
      try {
      await res.user.remove();
      res.json({ message: 'User deleted' });
      } catch (err) {
      res.status(500).json({ message: err.message });
      }
      });
  
      
      
      async function getUser(req, res, next) {
      let user;
      try {
      user = await User.findById(req.params.email);
      if (user == null) {
      return res.status(404).json({ message: 'Cannot find user' });
      }
      } catch (err) {
      return res.status(500).json({ message: err.message });
      }
      
      res.user = user;
      next();
      }
      
      module.exports = router;
