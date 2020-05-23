// 1. En el día de ayer hemos obtenido un beneficio de 270€. 
// Hoy hemos vendido 5 artículos por valor de 40, 25, 80, 55, y 45€.
// Calcula las ganancias totales de los dos días.


'use strict'
const moneyEarnedToday = [40,25,80,55,45];
const moneyEarnedYesterday = 270;


const gananciasTotales = moneyEarnedToday.reduce((accumulator,money)  => {
    return accumulator += money;
},moneyEarnedYesterday); // Accumulator = moneyEarnedYesterday

console.log(gananciasTotales)


// 2 CRea un nuevo array cuyos valores sean el doble que el array original



const arrayOriginal = [2,4,6];

const por2 = arrayOriginal.reduce((acc,number)  => {
    acc.push(number * 2)
    return acc
},[])

console.log(por2);


// 3. Filtra los numero de un array que sean mayores de 30

const arrayNumber = [32,28,21,29,35,57,42,23,98]

const filterOver30 = arrayNumber.reduce((accumulator,number) => {
    if(number > 30)
     accumulator.push(number);
     return accumulator;
},[])

console.log(filterOver30)

// 4. Crea un objeto llamado fruitsNumber cuyas propiedades serán el nombre de las distintas 
// frutas de un array. El valor de dichas propiedades será equivalente 
// al número de veces que se repite una fruta determinada en el array inicial.

// MUY RECOMENDABLE APRENDERLO

const fruitBasket = [
	'banana',
	'cherry',
	'orange',
	'apple',
	'cherry',
	'orange',
	'apple',
	'banana',
	'cherry',
	'orange',
	'fig'
];


const fruitsNumber = fruitBasket.reduce((accumulator, fruit) => {
	// Lo que estamos comprobando con este "if" es si la propiedad existe.
	// Si no existe la creamos y le asignamos el valor "1".
	if (!accumulator[fruit]) {
		accumulator[fruit] = 1;
	} else { // Si la propiedad existe le sumamos una unidad.
		accumulator[fruit] += 1;
	}
	return accumulator;
}, {}); // accumulator = {};

console.log(fruitsNumber);



// 5. Este ejercicio es similar al anterior solo que en lugar de añadir como valor el número de veces que se repite una fruta simplemente
//  vamos a contar cuántas frutas distintas existen en el array.


'use strict';

const fruitBasket = [
	'banana',
	'cherry',
	'orange',
	'apple',
	'cherry',
	'orange',
	'apple',
	'banana',
	'cherry',
	'orange',
	'fig'
];

const distinct = fruitBasket.reduce((accumulator, fruit) => {
	accumulator[fruit] = 1;
	return accumulator;
}, {}); // accumulator = {};

console.log(distinct)