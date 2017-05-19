const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const passport = require('passport');
const config = require('./config/db');

// Koneksi ke Database
mongoose.connect(config.database);

// Cek Koneksi ke database
mongoose.connection.on('connected', () => {
    console.log('Terkoneksi dengan database ' + config.database);
});

// Jika Koneksi Error
mongoose.connection.on('error', (err) => {
    console.log('Gagal Koneksi Ke database '+err);
});

const port = 8080;
const app = express();

// Routing
const users = require('./routes/users');
const sparingBoard = require('./routes/sparing-boards');
const dashboard = require('./routes/sparing-offers');

// MW untuk CORS
app.use(cors());

// Static Folder
app.use(express.static(path.join(__dirname, 'public')));

// MW untuk Body Parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

// MW untuk Passport
app.use(passport.initialize());
app.use(passport.session());

require('./config/passport')(passport);

app.use('/users', users);
app.use('/sparing-board', sparingBoard);
app.use('/dashboard/', dashboard);

app.get('/', (req, res, next) => {
    res.send('Invalid  End Point');
})

app.listen(port, () => {
    console.log('Server running on Port '+port);
})