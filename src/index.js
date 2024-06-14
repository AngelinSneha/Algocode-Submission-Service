const app = require('./app');
const { default: serverConfig } = require('./config/serverConfig');

const fastify = require('fastify')({ logger: true }) //call fastify constructor

fastify.register(app);

// Run the server!
fastify.listen({ port: serverConfig.PORT }, (err) => {
    if (err) {
        fastify.log.error(err)
        process.exit(1)
    }
    console.log(`Server up at port ${serverConfig.PORT }`);
})