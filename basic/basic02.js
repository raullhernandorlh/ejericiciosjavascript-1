
/**
 * Operaciones básicas con cadenas
 * 
 * Durante el desarrollo de una aplicación suele ser necesario
 * acceder a cada uno de los caracteres de una cadena, para ello
 * basta con escribir el nombre de la variable seguida de la posición
 * que nos interesa, entre corchetes:
 * 
 *    miCadena = 'Hola'
 *    segundaLetra = miCadena[1]
 * 
 * Notad cómo la numeración empieza en el cero, es decir, la primera letra
 * está en la posición cero, la segunda en la posición uno, etc.
 * 
 * Otra acción habitual es averiguar la longitud de una cadena:
 * 
 *    miCadena = 'Hola'
 *    longitud = miCadena.length
 * 
 * Con lo aprendido hasta ahora, escribir el código necesario para 
 * escribir en pantalla:
 * 
 *    - el nombre completo en formato: 'Induráin Larraya, Miguel (MIL)'
 *    - la última letra de cada palabra: 'LNA'
 *    - investigar qué pasa si accedéis a una posición mayor que la longitud,
 *      por ejemplo, la posición 1000
 *
 */

'use strict'

var name = 'Miguel';
var surname1 = 'Induráin';
var  surname2 = 'Larraya';

var primeraLetraNombre= name.length[0];
var primeraLetraApellido= surname1.length[0];
var primeraLetraApellido2= surname2.length[0];

var iniciales = `${primeraLetraNombre} ${primeraLetraApellido} ${primeraLetraApellido2}`;
console.log(iniciales);

let nombreCompleto = `${surname2} ${surname1} ${nombre} , ${iniciales}`;
console.log(nombreCompleto);


