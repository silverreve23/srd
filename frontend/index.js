const uri = 'localhost';
const port = 6030;
const socket = io(uri+':'+port);
const chanels = {
    shared: 'shared',
    private: 'private',
}

socket.on('connect', function(){
    console.log('connected!');
});
socket.on(chanels.shared, function(data){
    console.log('shared event');
    console.log(data);
});
socket.on(chanels.private, function(data){
    console.log('private event');
    console.log('message:');
    console.log(data.message);
    console.log('error:');
    console.log(data.error);
});
socket.on('disconnect', function(){
    console.log('disconnected!');
});

function emit(){
    const command = 'ls -l';
    socket.emit(chanels.private, { command: command });
}
