const command = require('./command.js');
const message = 'SRD Hello!';
const chanels = {
    shared: 'shared',
    private: 'private',
}

module.exports = {
    connection: (socket) => {
        socket.emit(chanels.shared, { message: message });
        socket.on(chanels.private, (data) => {
            command.run(data.command).then(stdout => {
                socket.emit(chanels.private, { message: stdout })
            }).catch(error => {
                socket.emit(chanels.private, { error: error })
            })
        });
    }
}
