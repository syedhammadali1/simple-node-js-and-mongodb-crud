const mongoose = require('mongoose');
require('dotenv').config();
const dbUrl = process.env.MONGODB_URI;

const connectDB = async () => {
    try {
      await  mongoose.connect(dbUrl, { useNewUrlParser: true, useUnifiedTopology: true })
            .then(() => { console.log('Connection TO mongoDB'); })
            .catch((err) => { console.log('Error', err); });

    } catch (error) {

    }
}


module.exports = connectDB;