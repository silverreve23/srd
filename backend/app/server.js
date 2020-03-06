exports.handler = (err) => {
    if(err) return console.log('something bad happened', err);

    console.log(`Server runed on ${config.port} port`);
}
