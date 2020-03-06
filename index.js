const request = require('./app/request.js');
const server = require('./app/server.js');
const http = require('http').createServer(request.handler);
const io = require('socket.io')(http);
const port = 6030;

http.listen(port, server.handler);

io.on('connection', function (socket) {
    socket.emit('shared', { hello: 'world' });
    socket.on('private', function(data){
        console.log(data);
    });
});
