const testController = require("../controller/testController");

async function testRoute(fastify, options) {
    fastify.get('/ping', testController.pingRequest)
};

module.exports = testRoute;