// En base a los arrays propuestos a continuación, obtén la siguiente información:

// 1. Número total de infectados.
// 2. Número total de sanos.
// 3. Numero total de infectados en los países (del array de países).
// 4. País con más infectados (del array de países).
// 5. Número de total de infectados del array de personas.
// 6. Array con nombre de todas las mascotas.
// 7. Array con las personas infectadas del array de personas.
// 8. Array de españoles con perro.
// 9. Número de personas infectadas del array de personas.
// 10. Array con las personas y el objeto de la persona tiene a mayores todos los datos de su mascota.
// 11. A partir de las personas sacar el animal que tienen más personas como mascota.
// 12. Número total de patas de las mascotas de las personas.
// 13. Array con las personas que tienen animales de 4 patas.
// 14. A partir del string `**'España'**` obtener un array de personas no infectadas de ese país.
// 15. Array de países que tienen personas con loros como mascota.
// 16. Número de infectados totales (los del objeto del país) de los países con mascotas de ocho patas.


'use strict';

// Array PERSONS------------------------------------------------------

const persons = [
  {
    name: 'Pedro',
    age: 35,
    country: 'ES',
    infected: true,
    pet: 'Troski'
  },
  {
    name: 'Elisabeth',
    age: 14,
    country: 'UK',
    infected: true,
    pet: 'Firulais'
  },
  {
    name: 'Pablo',
    age: 25,
    country: 'ES',
    infected: false,
    pet: 'Berritxu'
  },
  {
    name: 'Angela',
    age: 18,
    country: 'DE',
    infected: false,
    pet: 'Noodle'
  },
  {
    name: 'Boris',
    age: 50,
    country: 'UK',
    infected: true,
    pet: 'Leon'
  },
  {
    name: 'Donald',
    age: 69,
    country: 'US',
    infected: false,
    pet: 'Pence'
  }
];
//-------------------------------------------------------------------------------------------

//Array de PETS-------------------------------------------------------------------------------

  const pets = [
    {
      name: 'Troski',
      animal: 'perro'
    },
    {
      name: 'Firulais',
      animal: 'perro'
    },
    {
      name: 'Berritxu',
      animal: 'loro'
    },
    {
      name: 'Noodle',
      animal: 'araña'
    },
    {
      name: 'Leon',
      animal: 'gato'
    },
    {
      name: 'Pence',
      animal: 'perro'
    }
  ];

//---------------------------------------------------------------------------------------------

// ARRAY de COUNTRIES--------------------------------------------------------------------------

const countries = [
    {
      code: 'CN',
      name: 'China',
      population: 1439000000,
      infected: 81999
    },
    {
      code: 'US',
      name: 'Estados Unidos',
      population: 331000000,
      infected: 112468
    },
    {
      code: 'DE',
      name: 'Alemania',
      population: 83000000,
      infected: 56202
    },
    {
      code: 'ES',
      name: 'España',
      population: 46000000,
      infected: 72248
    },
    {
      code: 'UK',
      name: 'Reino Unido',
      population: 67000000,
      infected: 17301
    }
  ];

//-----------------------------------------------------------------------------------------------

// Numero total de Infectados

let totalInfectPeople = 0;

for (let country of countries){
    totalInfectPeople= totalInfectPeople + country.infected;
}

console.log(`El numero total de infectados es ${totalInfectPeople}`);


// Numero total de sanos

// let sumPeopleOfCountries = 0;
// let sumInfectPeople = 0;

// for (let country of countries){
//     sumInfectPeople= sumInfectPeople + country.infected;
//     sumPeopleOfCountries = sumPeopleOfCountries  + country.population;
// }

// console.log("El numro total de sanos es :" + (sumPeopleOfCountries - sumInfectPeople));


// Pais con mas infectados .ME FALTA RESOLVER


                                            


// 5. Número de total de infectados del array de personas.

let sumInfectedPeople = 0;

for (let person of persons){
    if(person.infected == true){
        sumInfectedPeople++;
    }
}

console.log(`El numero de personas infectadas es igual a ${sumInfectedPeople}`);


// Array con el nombre de todas las mascotas

let nameOfPets = [];

for(let pet of pets){
    nameOfPets.push(pet.name);
}

console.log(`Este el el array con el nombre de todas las mascotas ${nameOfPets}`);

//-------------------------------------------------------------------

// Array de españoles con perro -


const spanishWithDogs = persons
    // Filtramos a todos los españoles.
    .filter((person) => person.country === 'ES')
    // De la lista de españoles, filtramos a aquellos cuya mascota es un perro.
    .filter((person, index) => (person.pet === pets[index].name) && pets[index].animal === 'perro');

console.log(spanishWithDogs);




// 11. A partir de las personas sacar el animal que tienen más personas como mascota. FALTA POR HACER

let countPerro = 0;
let countLoro = 0;
let countAraña = 0
let countGato = 0

 persons.map((person) => person.pet)
                      .map((person,index) => {
                            if (person === pets[index].name && pets[index].animal === 'perro'){
                                countPerro++;
                            }
                            if (person === pets[index].name && pets[index].animal === 'araña'){
                              countAraña++;
                            }
                            if (person === pets[index].name && pets[index].animal === 'gato'){
                              countGato++;
                            }
                            if (person === pets[index].name && pets[index].animal === 'loro'){
                              countLoro++;
                            }

                      });

if(countPerro > countLoro && countPerro > countAraña && countPerro >countGato){
  console.log(`El perro es el animal que mas gente tiene como mascota.Con un total de ${countPerro} perros` );
}
else if (countGato> countLoro && countGato > countPerro && countGato>countAraña){
  console.log(`El gato es el animal que mas gente tiene como mascota.Con un total de ${countGato} gatos` );
  }
else if (countLoro > countAraña && countLoro > countPerro && countLoro >countGato){
    console.log(`El loro es el animal que mas gente tiene como mascota.Con un total de ${countLoro} loros` );
  }
else{
  console.log(`La araña es el animal que mas gente tiene como mascota.Con un total de ${countAraña} arañas` );
}
  

// // // 12. Número total de patas de las mascotas de las personas. FALTA POR HACER


let countDogPawns = 0;
let countCatPawns = 0;
let countSpiderPawns = 0;
let countParrowPawns = 0;

 pets.map((pet) => pet.animal)
                          .filter((pet) =>
                           {

                            if(pet === 'perro'){
                                countDogPawns = countDogPawns + 4;
                                return countDogPawns;
                            }
                            else if (pet === 'gato'){
                                countCatPawns = countCatPawns + 4;
                                return countCatPawns;
                            }
                            else if (pet === 'araña'){
                                 countSpiderPawns = countSpiderPawns + 8;
                                return countSpiderPawns;
                            }
                            else{
                                 countParrowPawns = countParrowPawns + 2;
                                return countParrowPawns;
                            }
                            
 });

 let totalPatas = countDogPawns + countCatPawns + countSpiderPawns + countParrowPawns;
 console.log(`El numero total de las patas de patas de las mascotas de las personas es igual a ${totalPatas} `);
 


// //-----------------------------------------------------------------------------

// // 13. Array con las personas que tienen animales de 4 patas.
let arrayNombresPersonas = [];

const peopleWithForLeggedPets = pets.filter((pet) => (pet.animal === 'perro' || pet.animal === 'gato'))
                                    .map((pet) => 
                                    {
                                      for(let person of persons){
                                        if(pet.name === person.pet){
                                          arrayNombresPersonas.push(person.name);
                                        }
                                      }
                                    }  );
console.log(arrayNombresPersonas);


// 14 A partir del string `**'España'**` obtener un array de personas no infectadas de ese país

let string =`**'España'**` ;

let pelarString = string.substr(3,6);
console.log(pelarString);

let arrayPersonasNoInfectadas = countries.map((country)=> country)
                                          .filter((country) =>
                                          {
                                            if(country.name === pelarString);

                                        });

console.log(arrayPersonasNoInfectadas)


// --------------------------------------------------------------------

// 15. Array de países que tienen personas con loros como mascota.


let paisesConLoros = pets.map((pet) => pet.name)
                        .filter((pet)=>{
                          if(pet.name == )
                        });


                                       



// // Aplicando ejemplos sencillos de map, filter y reduce

// let numbers = [6,42,4,81,56,33];
// console.log(`Array de numeros ${numbers}`);
// let addNumbers = numbers.map((number)=> number + 2);
// console.log(`Añadiendo dos unidades a cada numero del array ${addNumbers}`);

// let squareNumbers = numbers.map((number) => number * 2);
// console.log(`Elevando al cuadro los numeros del array ${squareNumbers}`);

// let numbersGreaterTHat30 = numbers.filter((number) => number > 30 );
// console.log(`Mostrando los numeros mayores a 30 ${numbersGreaterTHat30}`);

// let sumNumbers = numbers.reduce((acc,number) => acc + number);
// console.log(`Sumando todos los numeros del array ${sumNumbers}`);


// //Mas ejemplos con Reduce()

// // Vamos a sacar el valor mas alto con un operador ternario

// let vals = [5,4,1,2,9];

// // Y como funciona esto pues el primero valor del reduce es simpre el acumulador y el segundo valor es el valor que toma cada vez
// // Esta vez los hemos llamado a y b con lo cual aplicamos un valor ternario y vamos diciendo si a > b entonces a pero si es else
// // entonces b
// let biggest = vals.reduce((a,b) => a > b ? a:b);
// console.log(`El numero mas grande del array es ${biggest}`);

// let minimun = vals.reduce((a,b) => a < b ? a:b);
// console.log(`El numero mas pequeño del array es ${minimun}`);


// // Ahora vamos a hablar de la funcion fill(). La diferencia principal entre las funciones map() y fill() es que map no modifica el array original
// // sino que crea uno nuevo . En el caso de fill si que se que se modifica el array original.

// // En el siguiente ejemplo vamos a crear un array de undefined con fill y luego rellenarlo con map con numeros aleatorios que van del 1 al 100
// //

// let numerosAleatoriosDel1Al100 = Array(100).fill().map(Math.random );
// console.log(numerosAleatoriosDel1Al100);




                                                                

