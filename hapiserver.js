'use strict';

const Hapi = require('hapi');

// Create a server with a host and port
const server = new Hapi.server();
server.connection({
    host: 'localhost', 
    port: 8000 
});

// Add the route
server.route({
    method: 'GET',
    path:'/', 
    handler: function (request, reply) {
        return 'Hello World!';
    }
});
const init = async function(){
    await server.start();
    console.log(`Server running at: ${server.info.uri}`);
};

process.on('unhandledRejection', (err) => {

    console.log(err);
process.exit(1);
});

init();