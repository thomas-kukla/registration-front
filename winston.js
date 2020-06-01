const { createLogger, format, transports } = require('winston');
const { combine, timestamp, label, prettyPrint } = format;

const logger = createLogger({
    level: 'info',
    format: combine(
        label({ label: 'Store' }),
        timestamp(),
        prettyPrint()
        ),
        transports: [
            new transports.Console()
        ]
    })
module.exports = logger;


    // // //     Timestamp or log entry.
    // // //     Timing data for your request.
    // // //     Request endpoint data, such as paths: “/users” or verbs: GET, POST.
    // // //     IP of the requesting party.
    // // //     Correlation ID 