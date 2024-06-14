const SubmissionProducer = require('../producers/submissionQueueProducer')

class SubmissionService {
    constructor(submissionRepository) {
        this.submissionRepository = submissionRepository;
    }

    async addSubmission(submission) {
        const submission = this.submissionRepository.createsubmission(submission);
        if (!submission) {
            throw { message: "Not able to create submission" };
        }
        console.log(submission);
        const reponse = await SubmissionProducer(submission);
        return { queueResponse: Response, submission };
    }
}

module.exports = SubmissionService