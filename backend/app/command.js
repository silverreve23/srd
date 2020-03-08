const { exec } = require('child_process');

module.exports = {
    run($command){
        return new Promise((resolve, reject) => {
            if(!$command) return reject(false);

            exec($command.toString(), (error, stdout, stderr) => {
                if(error) return reject(error);
                if(stderr) return reject(stderr);

                return resolve(stdout);
            });
        });
    }
}
