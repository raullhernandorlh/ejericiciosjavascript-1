/**
 * Operando con más de dos elementos
 * 
 * Para solucionar alguno de los inconvenientes enumerados en el ejercicio anterior
 * usaremos un `Array`. Un Array es una colección de elementos entre corchetes:
 *
 *     miArray1 = [34, 90, 1, 0, 100]
 *     miArray2 = ['a', 'hola', 'rrr']
 *  
 * El número de elementos de cada array no está fijado de antemano, se pueden 
 * añadir y eliminar durante la ejecución de una aplicación. Además, `Javascript`
 * nos permite saber información sobre los arrays:
 *    - ¿Cuál es su longitud?
 *    - ¿Cuál es el primer elemento?
 *    - ¿Cuál es el elemento en cada una de las posiciones?
 * 
 */


 miArray1 = [34,90,1,0,100];

 // longitud

 length = miArray1.length;
 console.log(`La longitud es ${length}`);

 // primer elemento

 firstElement = miArray1[0];
 console.log(`EL primer elemento del array es ${firstElement}`);

 //segundo elemento

 secondElement = miArray1[1];
 console.log(`El segundo elemento del array es ${secondElement}`);

 // elemento en la ultima posicion

 lastElement = miArray1[miArray1.length - 1];
 console.log(`Este es el ultimo elemento del Array ${lastElement}`);

// elemento en una posicion que no existe

emptyElement = miArray1[10000];
console.log(`ELemento en una posicion que no existe ${emptyElement}`);

