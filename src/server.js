require('dotenv').config();
const Mongoose = require('mongoose');
const Express = require('express');

const app = Express();

const http = require('http').Server(app);
const io = require('socket.io')(http);
const user = require('../models/user');

app.get('/', (req, res) => {
  res.sendFile(`${__dirname}/index.html`);
});

io.on('connection', (socket) => {
  socket.on('submit', (msg) => {
    const nameStr = {
      msg: msg,
    };
  socket.on('search', (msg) => {
    const name = user.find( { name: new RegExp( msg, 'i')})
    socket.emit('search', name);
  }});
})

http.listen(process.env.PORT);
