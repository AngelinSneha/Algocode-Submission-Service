const app = require('./app');
const serverConfig = require('./config/serverConfig');
const connectToDB = require('./config/dbConfig');
const errorHandler = require('./utils/errorHandler');

const fastify = require('fastify')({ logger: true }) //call fastify constructor

fastify.register(app);
fastify.setErrorHandler(errorHandler);

// Run the server!
fastify.listen({ port: serverConfig.PORT }, async (err) => {
    if (err) {
        fastify.log.error(err)
        process.exit(1)
    }
    await connectToDB();
    console.log(`Server up at port ${serverConfig.PORT}`);
})