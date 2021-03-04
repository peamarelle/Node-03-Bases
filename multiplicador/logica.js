const logica = (base, limite) => {
    let resultado = ''
    for (let i = 0; i <= limite; i++) {
        resultado += `La base ${base} * ${i} es igual a ${base * i}\n`;
    }
    return resultado;
}

module.exports = {logica}