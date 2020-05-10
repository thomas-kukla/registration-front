// const winston = require('winston');
// const logger = winston.createLogger({
//     level: 'error',
//     message: '',
//     format: winston.format.json(),
//     transports: [
//         new winston.transports.Console({
//             format: winston.format.json(),
//         }),
//     ]
// });

// const { createLogger, format, transports } = require('winston');
// const { combine, timestamp, label, prettyPrint } = format;

// const logger = createLogger({
//     level: 'info',
//     format: combine(
//         label({ label: 'Store' }),
//         timestamp(),
//         prettyPrint()
//         ),
//         transports: [
//             new transports.Console(),
//             new transports.File({
//                 level: 'error',
//                 filename: 'errors.log',
//               })]
//     })

// import winston from 'winston';

// const loggers = {
//   mjson: winston.createLogger({
//     level: 'info',
//     format: winston.format.json(),
//     transports: [new winston.transports.File({ filename: 'app-info.log'})],
//   }),

//   simple: winston.createLogger({
//     level: 'error',
//     format: winston.format.simple(),
//     transports: [new winston.transports.File({ filename: 'app-error.log'}),],
//   })
// };
// module.exports = loggers;
    // // //     Timestamp or log entry.
    // // //     Timing data for your request.
    // // //     Request endpoint data, such as paths: “/users” or verbs: GET, POST.
    // // //     IP of the requesting party.
    // // //     Correlation ID (if you’re building a distributed system).