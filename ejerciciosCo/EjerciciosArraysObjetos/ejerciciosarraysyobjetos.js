// EJEMPLOS DE OBJETOS


let persona = {
    nombre:'Pepito',
    edad:32,
    genero:'masculino',
    intereses: ["musica","esqui"],
    bio: function (){
        console.log(this.nombre +' tiene '+ this.edad + ' de genero ' + this.genero + ' y le gustan la ' + this.intereses[0] + ' y el ' + this.intereses[1])
    }, 

    saludo: function () {
        console.log('Hola, Soy '+ this.nombre[0] + '. ');
    }
}

console.log(persona);

persona.nombre ="Raul";
persona.edad = 34;

var nombrePersona = persona.nombre;
console.log(nombrePersona);
var edadPersona = persona.edad;
console.log(edadPersona);
var biografiaPersona= persona.bio();
console.log(biografiaPersona)
var saludoPersona = persona.saludo();
console.log(saludoPersona);

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// EJEMPLOS DE ARRAYS

const otroArray = [ 1, 2, 3, 4]; //pueden ser del mismo tipo
const unoMas = [ 'a', 14, true, true, {a: 1}] //Pueden ser todos distintos y tener repetidos
console.log(otroArray);
console.log(unoMas);

// METODOS DE ARRAYS

// PUSH añade algo al array al final. MDN


// POP elimina el último elemento del array y lo devuelve, esto modifica el array en cuestión. MDN


// FOREACH Itera sobre todos los elementos del array. MDN


// SHIFT elimina el primer elemento del array y lo retorna. Este método modifica la longitud del array. MDN


// UNSHIFT añade un elemento al principio del array, es como el opuesto de push. MDN


// INDEXOF busca el índice de un elemento en un array, si encuentra algo devuelve su posición, sinó `-1. MDN


// SPLICE elimina elementos del array en una posición puede eliminar múltiples elementos. MDN


// SLICE devuelve una sección del array y NO modifica el array original. MDN


// REVERSE modifica el array que le pasemos y lo pone en orden inverso. MDN



// PROBANDO METODOS DE ARRAYS

const arrayDeNumeros = [9, 8, 7, 6, 5];
console.log(`Este es el array de numeros original ${arrayDeNumeros}`);
const copiaArrayDeNumeros = [...arrayDeNumeros];
console.log(`Esta es la copia de arraydeNumeros ${copiaArrayDeNumeros}`);

// Notese que cuando comparamos ambos arrays aunque sean identicos no son el mismo porque uno es la copia 
// y el sistema lo reconoce como tal
console.log(arrayDeNumeros === copiaArrayDeNumeros);

// Notese que le hemos añadido el numero 4 al array original y no hemos realizado ninguna copia
// despues de esta modificacion con lo cual la copia del array ya no tendra el mismo numero de elementos
arrayDeNumeros.push(4);
console.log(`Este es el array de numeros original ${arrayDeNumeros}`);
console.log(`Esta es la copia de arraydeNumeros ${copiaArrayDeNumeros}`);

// Podemos ver que con el unshift hemos metido el numero 10 al principio del array
 arrayDeNumeros.unshift(10);
 console.log(arrayDeNumeros);

 // Le quitamos el ultimo numero al array de numeros original (POP)
 const valorQuitado = arrayDeNumeros.pop();
 console.log(valorQuitado);
 console.log(arrayDeNumeros);

 // Eliminamos el primer numero del array con SHIFT

 const otrovalorQuitado = arrayDeNumeros.shift();
 console.log(otrovalorQuitado);
 console.log(arrayDeNumeros);

 // Sacamos la posicion de un numero o una palabra en el array . En este caso queremos obtener la posicion del 7
 const posicionDel7 = arrayDeNumeros.indexOf(7);
 console.log(`Esta es la posicion del numero7 dentro del array original de numeros ${posicionDel7}` ) ;


 arrayDeNumeros.forEach(numero => console.log(numero));

// for (let i = 0; i < arrayDeNumeros.length; i++) {
//   console.log(arrayDeNumeros[i]);
// }


