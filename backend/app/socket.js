const { exec } = require('child_process');
function runCommand(){
    exec("ls -la", (error, stdout, stderr) => {
        if (error) {
            console.log(`error: ${error.message}`);
            return;
        }
        if (stderr) {
            console.log(`stderr: ${stderr}`);
            return;
        }
        console.log(`stdout: ${stdout}`);
    });
}

module.exports = {
    connection: (socket) => {
        console.log('socket connect');
        socket.emit('shared', { hello: 'world' });
        socket.on('private', (data) => {
            console.log(data);
            runCommand();
        });
    }
}
