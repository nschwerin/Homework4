require('dotenv').config();
const Mongoose = require('mongoose');
const Express = require('express');

const app = Express();

const http = require('http').Server(app);
const io = require('socket.io')(http);
const user = require('../models/user');

app.get('/', (req, res) => {
    res.sendFile('index.html', { root: '.' });
});
