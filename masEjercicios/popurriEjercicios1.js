// Ejercicio 1

// function contarCaracteres(cadena = ''){
//     if(!cadena){
//         console.warn("No ingresaste ninguna cadena");
//     }else{
//         console.info(`La cadena ${cadena} tiene ${cadena.length} caracteres`)
//     }

// }   

// contarCaracteres("caballo");

// Si la queremos hacer con arrow function

const contarCaracteres = ((cadena='')=>
(!cadena)? console.warn('No ingresaste ninguna cadena'):
console.info(`La cadena ${cadena} tiene ${cadena.length} caracteres`));   

// contarCaracteres("Cuanto puto ruido en esta calle");


// Ejercicio 2
// Programar una funcion que te devuelva el texto recortado segun el numero de caracteres indiocados

const recortarTexto =(cadena = "", longitud = undefined) =>
(!cadena)?console.log("No ingresaste una cadena de texto"):
(longitud === undefined)?console.warn("No ingresaste la longitud para recortar el texto"):
console.info(cadena.slice(0,longitud));

// recortarTexto("Hola Mundo",5);
// recortarTexto("Hola Mundo");

// Ejercicio 3
// Programar una funcion que dado un String te devuelva un array de textos separados por cierto caracter

const cadenaArreglo =(cadena ="", separador = undefined) =>
(!cadena)?console.log("No ingresaste una cadena de texto"):
(separador === undefined)?console.warn("No ingresaste el caracter separador"):
console.info(cadena.split(separador));

// cadenaArreglo("Esta es mi casa"," ");


// Ejercicio 4
// Programar una funcion que repita un texto x veces 

const repetirTexto =(texto="", numeroVeces = undefined) =>
{
    if(!texto) return console.log("No ingresaste una cadena de texto");
    
    if(numeroVeces === undefined) return console.log("El texto no se va a repetir. Indica un numero de repeticiones");

    if(numeroVeces === 0) return console.log("El numero de veces no puede ser 0");

    if(Math.sign(numeroVeces) === -1) return console.log("El numero de veces no puede ser negativo");
    
    for( let i =1 ; i<=numeroVeces; i++) console.info(`${texto},${i}`);
}

// repetirTexto("Hola",3);


// Ejercicio 5
// Programa una funcion que invierte las palabras de una cadena de texto

const invertirCadena = (cadena="") =>
(!cadena) ?console.log('No ingresaste una cadena de texto'):

// El split separa pero deja espacios, el reverse invierte de atras adelante la palabra o palabras y luego para unirlo
// utilizamos el metodo join

console.info(cadena.split("").reverse().join());

// invertirCadena();
// invertirCadena("Hola Mundo");
// invertirCadena("Javascript es un lenguaje de programacion increible");


// Ejercicio 6
// Programa una funcion para contar el numero de veces que se repite una palabra en un texto largo

const textoEnCadena = (cadena= "", texto= "")=>{
    if(!cadena) return console.warn("No ha ingresado ningun texto donde checkear las palabras");
    if(!texto) return console.warn("No ha introducido ninguna palabra para contar las veces que aparece en el texto");

    let i=0;
    let contador =0;


    while(i!== -1){
    i = cadena.indexOf(texto,i);
    if(i!== -1){
        i++;
        contador++;
      }
    }
    
return console.log(`El numero de veces que se ha repetido la palabra ${texto} es igual a ${contador} veces`);
}
// textoEnCadena();
// textoEnCadena("Aquel dia que yo fui, en el dia que ellos quisieron que fuera el dia","dia");


// Ejercicio 7
// Programa una funcion o frase dada, es un palindromo (que se lee igual en un sentido que en otro)

const palindromo = (palabra ="")=>{
    if(!palabra) return console.warn("No ha ingresado ningun texto donde checkear las palabras");
    palabra = palabra.toLowerCase();

    let alReves = palabra.split("").reverse().join("");

    return (palabra === alReves)
    ?console.info(`Si es Palindromo. Palabra original ${palabra} palindromo ${alReves}`):
    console.info(`No es Palindromo. Palabra original ${palabra} palindromo ${alReves}`);
}

// palindromo("casa");
// palindromo("salas");

//Ejercicio 8
// Programa una funcion que elimine cierto patron de caracteres de un texto dado
// En este ejercicio utilizaremos la funcion replace. En esta le pasamos una funcion regular donde entrara el patron
// En nuestro caso el patron sera xyz. ¿Que es "ig"? . La "i" evita que distinga entre mayusculas y minusculas y la "g"
// indica que no se detiene en la primera coincidencia si no que sigue mirando haber si hay mas. Por ultimo en el replace
// vemos "". Las indica que no queremos reemplazar con nada y por tanto lo borrara.

const eliminarCaracteres = (texto="",patron="")=>
    (!texto) ? console.warn("No ha ingresado ningun texto donde se pueda eliminar el patron"):
    (!patron) ? console.warn("No ha ingresado ningun patron ha eliminar en el texto"):
    console.info(texto.replace(new RegExp(patron,"ig"),""));


// eliminarCaracteres();
// eliminarCaracteres("xyz1, xyz2 , xyz3, xyz4 y xyz5");
// eliminarCaracteres("xyz1, xyz2 , xyz3, xyz4 y xyz5","xyz");
// eliminarCaracteres("Lorem ipsum dolor sit amet consectetur adipiscing elit conubia pretium, ante curabitur nisi scelerisque lobortis vestibulum commodo non litora, cubilia quam sapien tristique nunc urna ornare dictum. Libero inceptos ac velit dictumst lacus cubilia parturient porta, eros facilisis ullamcorper varius vivamus vitae justo massa, litora curabitur magna dis quisque orci dui. Dis cras urna commodo accumsan facilisi nullam nibh lectus, lacus luctus morbi scelerisque sed egestas per, viverra ridiculus augue arcu libero gravida primis porttitor, aptent est suscipit netus montes dictum.","o");


// Ejercicio 9

// Programa una funcion que determine si un numero es primo o no. Un numero es primo cuando es solo divisible entre si mismo y 1
// Devolvera true


const determinarPrimo = (numero = undefined)=>{
    if(!numero === undefined) return console.log("Introduzca un numero para determinar si es primo o no");
    if(typeof numero !== "number") return console.log(`El valor ${numero} ingresado no es un numero`);
    if (numero === 0 ) return console.log("El numero introducido no puede ser 0");
    if (numero === 1 ) return console.log("El numero introducido no puede ser 1");
    if (Math.sign(numero) === -1) return console.log("El numero introducido no puede ser negativo");

    let divisible = false;

    for(i=2; i<numero; i++){
        if((numero%i) === 0){
            divisible = true;
            break;
        }
    }
    return(divisible)
    ?console.log(`El numero ${numero} no es primo`):
    console.log(`El numero ${numero} es primo`);
}

// determinarPrimo("casa");
// determinarPrimo(0);
// determinarPrimo(1);
// determinarPrimo(13);

// Ejercio 10
// Programa una funcion que determine si un numero es par o impar. Devolvera impare

const esParOImpar =(numero = undefined)=>{
    if(!numero === undefined) return console.log("Error Undefined. Introduzca un valor");
    if(!numero) console.log("Error. Introduzca un numero para ver si es par o impar")
    if(typeof numero !== "number") return console.log(`El valor ${numero} ingresado no es un numero`);

    let esPar = false;
    if(numero % 2 == 0){
        esPar = true
    }else{
        esPar = false;
    }
    return (esPar)
    ?console.log(`El numero ${numero} es Par`):
    console.log(`El numero ${numero} es Impar`);
}

// esParOImpar(5);
// esParOImpar(2);
// esParOImpar();

// Ejercicio 11
// Programa una funcion para devolver grados Celsius a Farenheit o viceversa

const convertirGrados = (grados = undefined, unidad = undefined)=> {
    if(grados === undefined) return console.log("Error. No ingresaste grados a convertir");
    if(unidad === undefined) return console.log("Error Undefined. Introduzca un tipo de grado. Celsius (c) y Farenheit (f)");
    if(typeof grados !== "number") return console.log(`El valor ${grados} ingresado no es un numero`);
    if(typeof unidad !== "string") return console.log(`El valor ${unidad} ingresado no es un cadena de texto`);
    if(unidad.length !==1 || !/(C|F)/.test(unidad)) return console.log("Valor de unidad no reconocido");
    
    if(unidad === "C"){
        return console.info(`${grados} C = ${Math.round((grados *(9/5)) + 32)} F`)
    }
    else if(unidad === "F"){
        return console.info(`${grados} C = ${Math.round((grados -32 )* (5/9))} F`)
    }
    else{
        return console.log("El tipo de grados a convertir no es valido")
    }
}

// convertirGrados();
// convertirGrados(2);
// convertirGrados("Hola","C");
// convertirGrados(2,2);
// convertirGrados(10,"Hola");
// convertirGrados(2,"E");
// convertirGrados(100,"C");
// convertirGrados(100,"F");


//Ejercicio 12

// Programa una funcion para convertir numeros de base binaria decimal y viceversa

const convertirBinarioADecimal = (numero = undefined,base=undefined)=>{
    if(numero === undefined) return console.log("Error. No ingresaste ningun numero a convertir");
    if(base === undefined) return console.log("Error. No ingresaste ninguna base numerica para convertir");
    if(typeof numero !== "number") return console.log(`El valor ${numero} ingresado no es un numero`);
    if(typeof base !== "number") return console.log(`El valor ${base} ingresado no es un numero`);

    if(base === 2){
        return console.info(` ${numero} base ${base} = ${parseInt(numero,base)} en  base 10`);
    }
    else if (base === 10){
        return console.info(` ${numero} base ${base} = ${numero.toString(2)} en  base 2`);
    }else{
        console.log("El tipo base a convertir no es valido");
    }
}

// convertirBinarioADecimal();>
// convertirBinarioADecimal("2");
// convertirBinarioADecimal(100);
// convertirBinarioADecimal(10,"casa");
// convertirBinarioADecimal ("casa", 100);
// convertirBinarioADecimal (100, 2);
// convertirBinarioADecimal (100, 10);
// convertirBinarioADecimal (100,3);

//Ejercicio 13
// Programa una funcion que devuelva el monto final despues de aplicar un descuento a una cantidad dada

const aplicarDescuento = (coste = undefined, descuento = undefined)=>{
    if(coste === undefined) return console.log("Error. No ingresaste ningun numero para expresar la cantidad");
    if(descuento === undefined) return console.log("Error. No ingresaste ningun numero que represente el descuento");
    if(typeof coste !== "number") return console.log(`El valor ${coste} ingresado no es un numero`);
    if(typeof descuento !== "number") return console.log(`El valor ${descuento} ingresado no es un numero`);
    if(coste < 0) return console.log("Error. No es posible aplicar descuento a cantidades negativas")
    if(coste === 0) return console.log("Error. No es posible aplicar descuento a una cantidad igual a 0");

    if (descuento >=5 && descuento <=60){
        let descuentoTotal = coste * (descuento/100);
        costeTotal = coste - descuentoTotal;
        console.log(`El precio total sera de ${costeTotal}`);
    }else{
        console.log(`No es posible aplicar descuentos del ${descuento} por ciento`);
    }
}

// aplicarDescuento(200,20);
// aplicarDescuento("Hola",20);
// aplicarDescuento(20,"Hola");
// aplicarDescuento();
// aplicarDescuento(20);


//Ejercicio 14
//Programa una funcion que dada una fecha valida determine cuantos años han pasado hasta el dia de hoy

const calcularAnios = (fecha = undefined)=>{
    if(fecha === undefined)return console.log("Error. No me ingresaste una fecha");
    if(!(fecha instanceof Date))return console.log("Error.El valor que ingresaste no es una fecha valida");

    let hoyMenosFecha = new Date().getTime() - fecha.getTime();
    // Expresion que me genera la unidad de tiempo que quiero validar. En este caso serian los años
    aniosEnMS = 1000 * 60 * 60 * 24 * 365;
    // Math.floor -- EL metodo floor redonde hacia abajo . Si pusieramos round redonde hacia arriba
    aniosHumanos = Math.floor(hoyMenosFecha/aniosEnMS);

    return(Math.sign(aniosHumanos) === -1)
    ?console.info(`Faltan ${Math.abs(aniosHumanos)}años para el ${fecha.getFullYear()}`)
    :(Math.sign(aniosHumanos) === 1)
    ?console.info(`Han pasado ${aniosHumanos} años desde ${fecha.getFullYear()}`):
    console.info(`Estamos en el año actual ${fecha.getFullYear()}`);
}

calcularAnios();
calcularAnios({});
calcularAnios("Hola");
calcularAnios(new Date(1986,3,15));
calcularAnios(new Date(1886,3,15));
calcularAnios(new Date(2067,3,15));
calcularAnios(new Date(2020,5,22));