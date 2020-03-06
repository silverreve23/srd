global.config = require('./config/index.js');

const request = require('./app/request.js');
const socket = require('./app/socket.js');
const server = require('./app/server.js');

const { exec } = require("child_process");
const http = require('http').createServer(request.handler);
const io = require('socket.io')(http);

http.listen(config.port, server.handler);

io.on('connection', socket.connection);
