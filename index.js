const {multiplicar} = require('./multiplicador/index');

const argv = require('yargs')

    .option('b', {
        alias: 'base',
        type: 'number',
        demandOption: true,
        describe: 'Es la base de la tabla de multiplicar'
    })

    .option('l', {
        alias: 'limite',
        type: 'number',
        demandOption: true,
        describe: 'Es el límite de multiplicaciones'
    })

    .option('v', {
        alias: 'visualizar',
        type: 'boolean',
        demandOption: false,
        describe: 'Muestra la tabla por consola'
    })

    .check((argv, options) => {
        if (isNaN(argv.b)) {
            throw new Error('La base tiene que ser un número')
        }

        if (isNaN(argv.l)) {
            throw new Error('El límite tiene que ser un número')
        }

        return true;
    })
    .help()
    .version()
    .argv;



const base = argv.b;
const limite = argv.l;
const visualizar = argv.v;

multiplicar(base, limite, visualizar);