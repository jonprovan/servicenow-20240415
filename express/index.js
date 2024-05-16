const express = require('express');
const cookieParser = require('cookie-parser');
const mongoose = require('mongoose');
const movieRouter = require('./routes/movies.route.js');
const dotenv = require('dotenv');
dotenv.config(); // load the values from .env onto object called process.env

const app = express();

const connectToMongo = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URL);
        console.log('Connected to MongoDB!');
    } catch(err) {
        console.log('Unable to connect to MongoDB :(');
    }
}

connectToMongo();

// On every request, if the Content-Type header is application/json, run JSON.parse on the request body and place it
// on the req.body property
app.use(express.json());
app.use(cookieParser());

const logger = (req, res, next) => {
    console.log(`Origin IP is: ${req.ip}`);
    next();
}

app.use(logger);
app.use('/movies', movieRouter); // anything beginning with /movies gets routed to the movie router

app.get('/', logger, (req, res) => {
    console.log(req.cookies);

    // creates a cookie called hello with a value of goodbye
    res.cookie('hello2', 'goodbye2', { httpOnly: true });
    res.send('<h1>Hello World</h1>');
});

app.delete('/logout', (req, res) => {
    res.clearCookie('hello2');
    res.send();
});

app.get(/cat/, (req, res) => {
    res.send('Cat Endpoint')
});

app.get('*', (req, res) => {
    res.redirect('/');
});

const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
    console.log(`Running on ${PORT}!`);
});

// S3 OBJECT STORAGE.. alongside other static assets like images, HTML, CSS

// Server side JS (like this express app), does NOT get delivered to the client

// EC2, Lambda, Digital Ocean Droplets