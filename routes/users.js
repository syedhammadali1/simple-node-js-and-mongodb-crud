const express = require('express');   
const User = require('../models/User');
const { formatValidationErrors } = require('../utils/helpers');

const userRouter = express.Router();




userRouter.get('/users',async (req,res) => {
    try {
        const users = await User.find();
        res.json(users);
    } catch (err) {
        res.status(500).json({message:err.message})
    }
});


userRouter.post('/users', async (req,res) => {
    console.log(req.body,'body');
    try {
        const newUser = new User(req.body);
        const savedUser = await newUser.save();
        res.json(savedUser);
    } catch (err) {
        const errors = formatValidationErrors(err);
        res.status(500).json({message:errors});
    }
})

module.exports = userRouter;