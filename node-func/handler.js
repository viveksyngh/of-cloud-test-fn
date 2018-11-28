"use strict"

const request = require('request');

module.exports = (context, callback) => {
    const r = {
        uri: context,
    };

    request.get(r, (err, res, body))
    callback(undefined, {status: "done", message: "Hello world from node funcion "});
}

