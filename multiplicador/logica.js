const logica = (base) => {
    let resultado = ''
    for (let i = 0; i <10; i++) {
        resultado += `La base ${base} * ${i} es igual a ${base * i}\n`;
    }
    return resultado;
}

module.exports = {logica}