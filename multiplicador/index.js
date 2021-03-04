let fs = require('fs');
let {logica} = require('./logica');
let colors = require('colors');

const multiplicar = (base, limite, visualizar) => {
    
    let resultado = logica(base, limite);
    
    if(visualizar) {
        console.log('=================='.green)
        console.log(`Tabla del ${base}`);
        console.log('=================='.green)
        console.log(resultado);
    }
    const nombreArchivo = `tablas/tabla-del-${base}.txt`;

    fs.writeFile(nombreArchivo, resultado, (err) => {
        if(err) {
            throw error;
        }
        console.log(`El archivo ${nombreArchivo} fue creado!`.rainbow);
    });
}

module.exports = {multiplicar}