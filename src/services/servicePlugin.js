const fastifyPlugin = require('fastify-plugin');
const SubmissionService = require('./submissionService');

async function servicePlugin(fastify, options) {
    // add data to fastify object
    fastify.decorate('submissionService', new SubmissionService(this.SubmissionRepository))
};

module.exports = fastifyPlugin(servicePlugin)