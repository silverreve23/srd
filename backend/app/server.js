exports.handler = (err) => {
    if(err) return console.log('SRD Server something bad happened', err);

    console.log(`SRD Server runed on ${config.port} port`);
}
