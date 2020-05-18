
// // ESTRUCTURA IF
// if (condicion) quieroEjecutarEsto();
// // Es equivalente a...
// if (condicion){
// 	quieroEjecutarEsto()
// }


// // ESTRUCTURA ELSE IF (UNA LINEA)

// if( estaCondicion === true){
// 	quieroEjecutarEsto()
// } else {
// 	quieroEjecutarEstoOtro()
// }


// // ESTRUCTURA ELSE IF (VARIAS LINEAS)

// if( estaCondicion === true){
// 	quieroEjecutarEsto()
// } else if (otraCondicion === true){
// 	quieroEjecutarEstoOtro()
// } else {
// 	ejecutoOtraCosaDistinta()
// }


// // Operador ternario
// esPar = prompt() % 2 === 0 ? true : false;

// ESTRUCTURA DE UN SWITCH

// switch (variable) {
//     case condicion:
//         hagoEsto()
//         break;
//     case otraCondicion:
//       hagoOtraCosa()
//         break;
//     default:
//         porDefectoHagoEsto()
//   }



//EJEMPLOS

// EJEMPLO 1Codigo en el que se ve la resolucion del mismo problema en una linea con el operador 
// ternario y en varias con el switch. En este se calcula si la persona es adulta o no en funcion de su edad

let age = 17;
let isAdult = age >= 18 ? 'adulto' : 'menor';
console.log(isAdult);
if (age >= 18) {
  isAdult = 'adulto';
} else {
  isAdult = 'menor';
}
console.log(isAdult);

// EJEMPLO 2. Vemos la resolucion de dos ejemplos en los cuales se da la solucion al mismo problema por dos vertientes
//. La primera a traves de un "Switch" y la segunda a traves de un "IF ELSE"

const myPet = 'perro';

switch (myPet) {
  case 'perro':
    console.log('tengo un perro');
    break;
  case 'gato':
    console.log('tengo un gato');
    break;
  default:
    console.log('no se que animal tienes');
}

if (myPet === 'perro') {
  console.log('tengo un perro');
} else if (myPet === 'gato') {
  console.log('tengo un gato');
} else {
   console.log('no se que animal tienes');
}




// EJEMPLO 3 . En este ejemplo se ve la utilizacion del Switch

// const myPet = 'perro';

switch (myPet) {
  case 'perro':
    console.log('GUAU');
  case 'gato':
    console.log('Tiene 4 patas');
    break;
  case 'arana':
  case 'pulpo':
    console.log('tiene 8 patas');
    break;
  default:
    console.log('no se que animal tienes');
}


  