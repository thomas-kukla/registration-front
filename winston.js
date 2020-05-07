const winston = require('winston');
const logger = winston.createLogger({
    transports: [
        new winston.transports.Console()
    ]
});

module.exports = logger;
// // //     Timestamp or log entry.
// // //     Timing data for your request.
// // //     Request endpoint data, such as paths: “/users” or verbs: GET, POST.
// // //     IP of the requesting party.
// // //     Correlation ID (if you’re building a distributed system).