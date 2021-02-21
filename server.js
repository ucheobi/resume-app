const express = require('express');
const mongoose = require('mongoose');
const morgan = require('morgan');
//const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const expressValidator = require('express-validator');
const cors = require('cors');
require('dotenv').config();


//import route middlewares
const userRoute = require('./routes/user');
const authRoute = require('./routes/auth');

//initialize app server
const server = express();

//connect to mongoose database
mongoose
    .connect(process.env.DATABASE, {
        useNewUrlParser: true,
        useCreateIndex: true,
        useUnifiedTopology: true,
        useFindAndModify: false
    })
    .then((err, result) => {
        
        console.log('Database successfully connected')
    } 
    );

//apply middlewares
server.use(morgan('dev'));
server.use(express.urlencoded());
server.use(express.json())
server.use(cookieParser());
server.use(expressValidator());
server.use(cors());

//get routes 
server.get("/", (req,res) => {
    res.send("Your server is up and running");
});

//server.use("/api", userRoute);
server.use("/api", authRoute);

const port = process.env.PORT || 8080;

server.listen(port, () => {
    console.log(`Server is running at ${port}`);
})
