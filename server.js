const express = require('express');
const mongoose = require('mongoose');
const morgan = require('morgan');
//const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const expressValidator = require('express-validator');
const cors = require('cors');
const puppeteer = require('puppeteer');
require('dotenv').config();

const work = require('./models/data/work')


//import route middlewares
//const printRoute = require('./routes/print');
const authRoute = require('./routes/auth');
const resumeRoute = require('./routes/user-data');

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
server.use(express.urlencoded({ extended: true }))
server.use(express.json())
server.use(cookieParser());
server.use(expressValidator());
server.use(cors());

//get routes 
server.get("/", (req,res) => {
    res.send("Your server is up and running");
});

(async () => {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();

    await page.goto('https://developers.google.com/web/tools/puppeteer/get-started')
    await page.waitForSelector("sidebar-component")

    await page.pdf({ 
        path: 'resume.pdf',
        format: 'A4' ,
        printBackground: true
    });

    await browser.close();

})()

//server.use("/api", userRoute);
server.use("/api", authRoute);
server.use("/api", resumeRoute);
//server.use("/api", printRoute);

const port = process.env.PORT || 8080;

//console.log(work.schema.obj)
server.listen(port, () => {
    console.log(`Server is running at ${port}`);
})
