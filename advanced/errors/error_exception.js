// Implementacion de try/catch para coger los errores. En cada funcion tenemos un "throw" en el que si existe algun error de ese tipo
// nos salta el catch al final del programa mostrandose el error

//} catch (e) {
    //console.log('Hubo algún error: ');
    //console.log(e);
    //process.exit();   // salgo de la aplicación
//}


const process = require('process');

const divDePositivos = (a, b) => {
    if (a < 0 || b < 0) {
        throw 'bad-parameters.div';
    }

    if (b == 0) {
        throw 'bad-parameters.div';
    }

    return a/b;
}

const multDePositivos = (a, b) => {
    if (a < 0 || b < 0) {
        throw 'bad-parameters.mul';
    }

    return a * b;
}

const valor1 = 9;
const valor2 = 1;

const valor3 = 2;
const valor4 = 4;


try {
    const resultado = divDePositivos(valor1, valor2);
    const resultadoMul = multDePositivos(valor3, valor4);

    console.log(`La división es: ${resultado}`);
    console.log(`La multiplicación es: ${resultadoMul}`);
} catch (e) {
    console.log('Hubo algún error: ');
    console.log(e);
    process.exit();   // salgo de la aplicación
}


console.log('Línea al final')