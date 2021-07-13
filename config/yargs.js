const argv = require('yargs')
    .option('b', {
        alias: 'base',
        type: 'number',
        demandOption: true,
        describe: 'Specify the base for multiply',
    })
    .option('v', {
        alias: 'verbose',
        type: 'boolean',
        default: false,
        describe: 'Display the table on console'
    })
    .option('l', {
        alias: 'limit',
        type: 'number',
        default: 10,
        describe: 'Set the limit for the table'
    })
    .check((argv, options) => {
        if (isNaN(argv.base)) {
            throw 'Base must be a number'
        }

        return true;
    })
    .argv;

module.exports = argv;
