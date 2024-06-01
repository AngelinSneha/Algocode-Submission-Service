const app = require('./app');

const fastify = require('fastify')({ logger: true }) //call fastify constructor

const PORT = 3000;

fastify.register(app);

// Run the server!
fastify.listen({ port: PORT }, (err) => {
    if (err) {
        fastify.log.error(err)
        process.exit(1)
    }
    console.log(`Server up at port ${PORT}`);
})