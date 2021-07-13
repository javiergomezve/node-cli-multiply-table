const fs = require('fs');
const colors = require('colors');

const makeFile = async (base, limit, verbose) => {
    if (verbose) {
        console.log('====================='.green);
        console.log('Table del '.green+colors.blue(base) +' hasta el '.green +colors.blue(limit));
        console.log('====================='.green);
    }

    let outFile = '';
    let outConsole = '';

    for (let i = 1; i <= limit; i++) {
        outConsole += `${base} ${'x'.green} ${i} ${'='.green} ${base * i}\n`;
        outFile += `${base} x ${i} = ${base * i}\n`;
    }

    const fileName = `tabla-del-${base}.txt`;

    if (verbose) {
        console.log(outConsole);
        console.log('=====================');

        console.log(`File ${fileName.green}`);
    }

    try {
        fs.writeFileSync(`./out/${fileName}`, outFile);
        return fileName;
    } catch (error) {
        throw error;
    }
};

module.exports = {
    makeFile
}
