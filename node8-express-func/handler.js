"use strict"

module.exports = (event, context) => {
    let err;
    const result =             {
        status: "Hello world from node8 express funcion, You said: " + JSON.stringify(event.body)
    };

    context
        .status(200)
        .succeed(result);
}
