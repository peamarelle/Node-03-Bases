let fs = require('fs');
let {logica} = require('./logica');

const multiplicar = (base) => {
    console.log('==================')
    console.log('Tabla del ${base}');
    console.log('==================')

    let resultado = logica(base);

    console.log(resultado);
    const nombreArchivo = `tablas/tabla-de-${base}`;
    fs.writeFile(nombreArchivo, resultado, (err) => {
        if(err) {
            throw error;
        }
        console.log(`El archivo ${nombreArchivo} fue creado!`);
    });
}

module.exports = {multiplicar}