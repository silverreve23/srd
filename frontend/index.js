const socket = io('http://localhost:6030');

socket.on('connect', function(){
    console.log('connected!');
});
socket.on('shared', function(data){
    console.log('shared event');
    console.log(data);
});
socket.on('disconnect', function(){
    console.log('disconnected!');
});

socket.emit('private', { hello: 'world' });
