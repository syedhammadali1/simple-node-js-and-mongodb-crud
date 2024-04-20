const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: {
        type:String,
        required:[true, 'name is required.'],

    },
    email:{
        type:String,
        required:[true, 'Email is required.'],
        // unique:[true, 'Email must be unique.']
    }
});

module.exports = mongoose.model('User',userSchema);