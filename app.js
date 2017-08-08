

const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors');
const passport = require('passport');
const mongoose = require('mongoose');
const config = require('./config/database');

mongoose.connect(config.database);

mongoose.connection.on('connected', () =>{
    console.log('connected to database ' + config.database);
});
mongoose.connection.on('error', (err) =>{
    console.log('database error ' + err);
});

var testdata = 10;

const app = express();

const users = require('./routes/users');

//const port = 3000;
const port = 3000;//process.env.PORT || 8080; // for heroku deployment

app.use(cors());

// passport middleware
app.use(passport.initialize());
app.use(passport.session());
require('./config/passport')(passport);

// body parser middlware
app.use(bodyParser.json());

app.use('/users', users);

// set static folder
app.use(express.static(path.join(__dirname, 'public'))); // or client

// index routes
app.get('/', (req, res) => {
    res.send('invalid endpoint');
});

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'public/index.html'));
});

app.listen(port, () => {
    console.log('server started on port ' + port);
});







