const express = require('express');
const connectDB =  require('./database/db')
const userRouter = require('./routes/users');
const bodyParser = require('body-parser')
const multer = require('multer')
// const usersRouter = require('./routes/users')

const app = express();
const port = process.env.PORT || 3000;

// Connect to MongoDB
connectDB();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(userRouter);
// app.use('/users',usersRouter)
app.listen(port,() =>{ 
    console.log(`server in listening on port ${port}`)

});