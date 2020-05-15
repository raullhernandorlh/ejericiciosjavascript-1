// INTERVALS

// 1.setTimeOut------PONER TEMPORIZADOR
// Con setTimeout podemos aplazar la ejecución de un fragmento de código. 
// Para cancelar un setTimeout debemos de guardar 
// lo que nos devuelve cuando lo llamamos y posteriormente hacer un clearTimeout

// Empezamos el timeout 

// idTimeout = setTimeout(() => console.log('Esto tarda 2 seg'),2000);
// console.log(idTimeout);
// // Esto cancela el timeout
// // clearTimeout(idTimeout);


//2.setInterval-----REPETIR PERIODICAMENTE UN FRAGMENTO DE CODIGO

// Con setInterval podemos repetir periodicamente la ejecución de un fragmento de código.
// Para cancelar un setInterval debemos de guardar lo que nos devuelve cuando
// lo llamamos y posteriormente hacer un clearInterval

// idInterval = setInterval(() => console.log('Hola caracola'),2000);
// console.log(idInterval);

// clearInterval(idInterval);

//3. Promises -----
// Una promise representa un valor que puede estar disponible ahora, 
// en el futuro, o nunca. Then devuelve una nueva promesa. Para resolver una 
// promesa debemos usar el primer parámetro del callback, 
// para rechazar la promesa usaremos el segundo parámetro


// Me lanza con el "then" la promesa. AL tener un "setTimeOut" de 3 segundos tarda ese tiempo en realizarlo
// const myPromise = new Promise(function(resolve, reject) {
//     setTimeout(function() {
//         resolve("Hola caracola");
//     },3000)
// });

// myPromise.then(function(value) {
//     console.log(value)
// })

// 4. Promise All ---

//Espera a que todas las promesas de un array de promesas terminen, 
//entonces en el callback del then tendremos disponible un array de valores, 
//los valores estarán en el mismo orden que las promesas iniciales.

// 4.1 Creo la funcion y le meto una variable que genera nuevo aleatorio ("randomNumber")
// 4.2  Le paso este numero a la nueva promesa a traves del resolve
// 4.3  Creo un temporizador y en este le paso el random number 
// 4.4. Podemos ver que la promesa con el numero aleatorio se genera al instante pero luego paso este 
//      a traves de la funcion setTimeOut con un tiempo aleatorio 
// 4.5. Al final creamos un array de promesas y vamos metiendo cada una segun se van generando a traves
//      de la funcion

// function promiseGenerator() {
//     const randomNumber = Math.random() * 10000;
//     return new Promise((resolve) =>{
//         console.log("Espero -->",randomNumber);
//     setTimeout(() =>{
//         console.log("Resolviendo -->",randomNumber);
//         resolve(randomNumber);
//     },randomNumber);
//  });
// }

// const allPromises = [];
// allPromises.push(promiseGenerator());
// allPromises.push(promiseGenerator());
// allPromises.push(promiseGenerator());


// 5. PROMISE RACE
//En cuanto termina la primera promesa ejecuta el callback y tendremos el valor de esa promesa en el parámetro del callback. 
//El callback no se vuelve a ejecutar aunque terminen el resto de promesas.


// function promiseGenerator() {
//     const randomNumber = Math.random() * 10000;
//     return new Promise((resolve) => {
//       console.log('Espero ->', randomNumber);
//       setTimeout(() => {
//         console.log('Resolviendo ->', randomNumber);
//         resolve(randomNumber);
//       }, randomNumber);
//     });
//   }
  

// const allPromises = [];

// allPromises.push(promiseGenerator());
// allPromises.push(promiseGenerator());
// allPromises.push(promiseGenerator());

// Promise.race(allPromises).then((raceData) =>{
//     console.log(raceData);
// });


// 6. Ejemplo Cronometro

// function chrono(ammount) {
//     let elapsedTime = 0;
//     const intervalId = setInterval(() => {
//       if (elapsedTime > ammount) {
//         console.log('RING RING RING ');
//         clearInterval(intervalId);
//       } else {
//         console.log(`Seconds elapsed ${elapsedTime}`);
//         elapsedTime++;
//       }
//     }, 1000);
//   }
//   chrono(5); 


// 7. Ejemplp PROMISES

let amount = null;
let cardPrice = null;

// Creando primera promesa
const accountRequest = new Promise((resolve,reject) =>{
    resolve(12000);
});

const carRequest = new Promise((resolve,reject) =>{
    setTimeout(() =>{
        resolve(11000);
    },Math.random() * 1000);

});

// Tengo las dos promesas y las meto en un array de promesas
const promiseArray =[accountRequest,carRequest];
// Aplico "Promise.all" a "promiseArray"
const allDataPromise = Promise.all(promiseArray);
// Aplico "Promise.rACE" a "promiseArray"
const promiseRace = Promise.race(promiseArray);

// Aplicamos todos los datos del array al PromiseAll. Se aplican en bloque
allDataPromise.then((allData)=>{
    if(allData[0]>=allData[1]){
        console.log(allData[0]);
        console.log(allData[1]);
        console.log("compra");
    }else{
        console.log("Esperar");
    }
});

// Aplicamos los datos del array pero de uno en uno
promiseRace.then((value) => {
    console.log('RACE', value);
  });
  


  