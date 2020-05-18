// MAP

// let datos = [1, 2, 3, 4, 5];

// let datosMas5 = datos.map (datos => console.log(datos + 5));



// RECORRER ARRAY DE NUERMOS CON FOR , FOR OF y MAP


// Recorrer el array con for, for ..of y map

let myArray = [9, 8, 7, 6];

// for(i = 0 ; i <myArray.length ; i++){
//     console.log(myArray[i]);
// }


// for(numero of myArray){
//     console.log(numero);
// }

// let imprimirNumeros = myArray.map(numero => console.log(numero))

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


// CALLBACK 

function myCallbackES(name) {
    console.log(`Hola ${name}`);
  }
  function myCallbackEN(name) {
    console.log(`Hi ${name}`);
  }
  
  function greet(callback) {
    let name = 'Iván';
    callback(name);
  }
  
  greet(myCallbackES);
  greet(myCallbackEN);


// MULTIPLICAR POR DOS UN ARRAY CON Y SIN MAP

const myMap = [9, 8, 7, 6];

function double(data) {
  let result = [...data];
  for (let i = 0; i < data.length; i++) {
    result[i] = result[i] * 2;
  }
  return result;
}

const doubleValue = double(myMap);
console.log("Sin Map" + doubleValue);


const doubleWithMap = myMap.map(numero =>console.log(numero * 2))
console.log("Con Map" + doubleWithMap);


// MAP CON USERS

let users = [
    { name: 'Ivan', age: 35 },
    { name: 'David', age: 29 }
  ];
  

  function getAge(users, index, data) {
    console.log(data);
    return users.age;
  }

  console.log(users,age);
  

  