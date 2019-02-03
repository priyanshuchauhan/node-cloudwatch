var http = require('http');

exports.handler = function(event, context, callback) {
    context.logGroupName
    const message = 'No Message';
    const logLevel = 'LOG';
    console.log(`## ${logLevel} message: `, message);
    console.info(`$$ ${logLevel} message: `, message);
    console.debug(`%% ${logLevel} message: `, message);
    callback(null, "success");  // Indicates success with information returned to the caller.
}