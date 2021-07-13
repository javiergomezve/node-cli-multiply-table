require('colors');
const argv = require('./config/yargs');
const {makeFile} = require('./helpers/multiply')

console.clear();

makeFile(argv.base, argv.limit, argv.verbose)
    .then(fileName => console.log(`${fileName.rainbow} created`))
    .catch(err => console.error(err))
