const testController = require("../../../../controller/submissionController");

async function testRoute(fastify, options) {
    fastify.get('/ping', testController.pingRequest)
}

module.exports = testRoute;