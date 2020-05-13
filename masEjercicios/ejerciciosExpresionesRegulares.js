// Ejercicios con expresiones regulares


// 1. Programa una funcion que dada una cadena de texto cuente el numero de vocales y consonantes




const contarLetras = (cadena = undefined)=>{

    if(!cadena) return console.warn("Error. Tiene que ingresar una cadena de texto");
    if(typeof cadena !== "string") return console.error("Error. Lo introducido no es una cadena de texto")
    let vocales = 0;
    let consonantes = 0;

    cadena = cadena.toLowerCase();

    for (letra of cadena){
        if(/[AEIOUaeiouáéíóú]/.test(letra)){
            vocales++;
        }
        else{
            consonantes++;
        }
    }
    return console.info({
        cadena:cadena,
        vocales:vocales,
        consonantes:consonantes
    });
}

contarLetras(0);
contarLetras();
contarLetras("Esto es un dia lluvioso");

// Ejercicio 2 . Programa una fucnion que programa que un texto sea un nombre valido

const validarNombre = (nombre = "")=>{
    if(!nombre) return console.warn("Error. No ingresaste un nombre");
    if(typeof nombre !== "string") return console.error("Error. Lo introducido no es una cadena de texto")

    // Expresiones regulares
    //^ : No puede haber nada antes de la expresion
    //$ : No puede haber nada despues de la expresion
    // + : Para que la expresion regular lo evalue por cada caracter
    // \s: Es para que acepte espacios en blanco
    // g: Para buscar en todos los caracteres

    let expReg = /^[A-Za-zÑñÁáÉéÍíÓóÚú\s]+$/g.test(nombre);

    return (expReg)?console.log(`El nombre : ${nombre} es valido`): console.log(`El nombre : ${nombre} no es valido`);
}

validarNombre()
validarNombre(0);
validarNombre("$$$$$$");
validarNombre("Raul");


// Ejercicio 3. Programar una funcion que valide que un texto sea un email valido

const validarEmail = (email = "")=>{
    if(!email) return console.warn("Error. No ingresaste un email");
    if(typeof email !== "string") return console.error("Error. Lo introducido no es una cadena de texto")

    // Expresiones regulares
    //^ : No puede haber nada antes de la expresion
    //$ : No puede haber nada despues de la expresion
    // + : Para que la expresion regular lo evalue por cada caracter
    // \s: Es para que acepte espacios en blanco
    // g: Para buscar en todos los caracteres

    let expReg = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i.test(email);

    return (expReg)?console.log(`El email : ${email} es valido`): console.log(`El email : ${email} no es valido`);
}

console.log("Hola");

validarEmail();
validarEmail(0);
validarEmail("$$$$$$");
validarEmail("Raul");
validarEmail("raullopezhernandogmail.com");
validarEmail("raulopezhernando@gmail.com");
validarEmail("raullopezhernando@gmailcom");
validarEmail("raullopezhernando@gmail.es");