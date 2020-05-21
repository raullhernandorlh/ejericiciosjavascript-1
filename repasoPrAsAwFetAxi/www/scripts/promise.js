// // PROMISE

// const fetch = require("node-fetch");
// // import { rejects } from "assert";

// // Una promesa representa un valor que puede estar disponible ahora, en el futuro o nunca . Para intentar que te devuelva algo
// // despues de la promesa ejecutamos then. Para resolver una promesa debemos usar el primer parametro del callback y para rechazarla el segundo




// // const myPromise = new Promise((resolve,reject) => {

// //     setTimeout(() =>{
// //         resolve("El valor que queremos")
// //     },3000);
// // });


// // // Llamamos a la promesa

// //  myPromise.then((data) => console.log(data))
// // console.log(myValue);

// // Este console.log es imposible que se ejecute y nuestra consola nos saldra "Promise {pending}"

// // console.log(myValue);

// // Utilizamos un async para dar tiempo a la promesa a ejecutarse.  Es imposible ejecutar MyValue con codigo sincrono porque hay que darle tiempo
// // a la promesa a ejecutarse

// // (async () => {
// //     const value = await myValue;
// //     console.log(value)
// // })();



// // ALL PROMISES - Generador de Promesas



// function promiseGenerator(){
//     const randomNumber = Math.random() * 10000;
//     return new Promise((resolve) =>{
//         console.log("Esta promesa tardara " + randomNumber/1000 + "segundos");
//         setTimeout(() =>{
//             console.log("He obtenido la informacion de esta promesa que dura " + randomNumber);
//         },randomNumber)
//     });
// }

// const allPromises = [];

// allPromises.push(promiseGenerator());
// allPromises.push(promiseGenerator());
// allPromises.push(promiseGenerator());


// // Promise.all(allPromises).then((allData) =>{
// //     console.log(allData);
// // });


// // PROMISE RACE. Devuelve solo la promesa mas rapida

// Promise.race(allPromises).then((allData) =>{
//     console.log(allData);
// });


// // EJEMPLO PROMISES

// const isMomHappy = true;

// // Creamos nuestra promesa. Si mama esta feliz hay telefono si no meh....

// // PRIMERA PROMESA

// const willIGetNewPhone = new Promise((resolve,result) =>{

//     setTimeout(() =>{
//         if(isMomHappy){
//             const phone ={
//                 brand:'Samsung',
//                 color:'black'
//             }
//             resolve(phone);
//         }else{
//             const reason = new Error("Mama no esta feliz.....");
//             reject(reason);
//         }
//     },3000);
// });

// // Si todo ha ido de lujo le diremos a nuestro amigo que tenemos nuestro telefono . Esta funcion tambien devuelve una promesa

// // SEGUNDA PROMESA

// const showMyNewPhone = (phone) => {

//     const message = "Hola amigo , tengo el nuevo " + phone.brand + " de color " + phone.color;
//     return Promise.resolve(message);
// };


// // LLamo a mi promesa

// // Si todo va bien el resolve nos va a devolver su contenido =


// willIGetNewPhone
//     .then((phoneData) => {
//         // Le pasamos esta informacion a la funcion "showMyNewPhone"
//         showMyNewPhone(phoneData).then(myMessage => {
//             console.log(myMessage);
//         })
//     })
//     // SI mama no esta feliz No hay telefono
//     .catch(error => console.log(error.message));


// ASYNC AWAIT

// En async await podemos tener el mismo codigo que con then pero de una manera que sea lea mas facil .Antes deejecutar la linea que sigue a el await primero se tiene que resolver la promesa
// que estamos esperando

// Explicacion : Tenemos una funcion que genera promesas en un tiempo random. Luego tenemos un async para ir ejecutando dichas promesas. Se ejecutaran
// en orden de duracion pero tienen que darse todas. Es necesario utilizar un async al final para que funcione


// function promiseGenerator() {
//     const randomNumber = Math.random() * 10000;
//     return new Promise((resolve) => {
//         console.log("Esta promesa tardara " + Math.round(randomNumber / 1000) + "segundos");
//         setTimeout(() => {
//             console.log("He obtenido la informacion de la promesa que dura" + Math.round(randomNumber / 1000))
//             resolve(randomNumber);
//         }, randomNumber);
//     })
// }



// async function oneFunction() {
//     let aValue1 = promiseGenerator();
//     console.log("Mi primer valor" + aValue1);
//     let aValue2 = promiseGenerator();
//     console.log("Mi segundo valor" + aValue2);
//     let aValue3 = promiseGenerator();
//     console.log("Mi tercer valor" + aValue3);
// }

// // LLamos a la funcion asyncrona con una IFI (Funcion Inmediatamente Invocada)

// (async () => {
//     await oneFunction()
// })();


// //EL mismo codigo con "then" es menos lejible

// function otherFunction() {
//     promiseGenerator().then((aValue1) => {
//         console.log("AWAIT1", aValue1);
//         console.log("----------------------------")
//         const aValue2 = promiseGenerator().then((aValue2) => {
//             console.log("AWAIT2", aValue2);
//             console.log("----------------------------")
//             const aValue3 = promiseGenerator().then((aValue3) => {
//                 console.log("AWAIT3", aValue3)
//                 console.log("----------------------------")
//             })
//         })
//     })
// }

// otherFunction();



// JSON FETCH - 1 EJEMPLO1

// Podemos convertir un objeto a JSON pero tenemos que tener en cuenta que este no puede tener referencias ciclicas 
// Podemos usar fetch para recuperar una peticion de un servidor y este nos devolvera una promesa


// const euros = 100;
// console.log(`Importe inicial en ${euros}`);


// function euros_to_usd(quantity) {
//     fetch('https://api.exchangerate-api.com/v4/latest/EUR')
//         //Obtener respuesta de la peticion
//         .then((response) => {
//             const data = response.json();
//             console.log(response);
//             console.log("-------------------------------")
//             return data;
//         })
//         . then((data) => {
//             //Obtenemos los datos del dolar y lo multiplicamos por la cantidad
//             console.log(data);
//             const conversion = (quantity * data.rates.USD).toFixed(2);
//             console.log(`${euros} euros equivalen a ${conversion}`);
//         });
// }

// euros_to_usd(euros);


// JSON FETCH - 2 - EJEMPLO

// const EUR_URL = 'https://api.exchangerate-api.com/v4/latest/EUR';
// const USD_URL = 'https://api.exchangerate-api.com/v4/latest/USD';

// const euros = 100;

// console.log(`Importe inicial en ${euros}`);

// async function eurDolYen(euros){
//     // EL parametro response tiene datos sobre la propia peticion, NO TIENE EL DATO QUE HEMOS PEDIDO AL SERVIDOR
//     const response = await fetch (EUR_URL);
//     console.log(response);

//     // EL DATO QUE QUEREMOS NOS LO DEVUELVE EL METODO JSON Y LO DEVUELVE COMO UN PROMISE 
//     let dataEUR = await response.json();
//     console.log(dataEUR);

//     //Ahora necesitamos acceder a las propiedad "rates" de "data" para hacer la primera conversion
//     const dollars = euros * dataEUR.rates.USD;
//     console.log(`${euros} equivalen a ${dollars.toFixed(2)}`)

//     //Ahora obtnemos los ratios de conversion del dolar
//     //En este punto que parece muy confuso lo que hacemos es obtener los ratios de conversion del dolar en una sola linea
//     // en la que aplicamos fetch y luego el await pasando a json para obtener la data

//     const dataUSD = await(await fetch (USD_URL)).json();

//     // Realizamos la segunda conversion
//     const yenes= euros * dataUSD.rates.JPY;
//     console.log(`${dollars} equivalen a ${yenes.toFixed(2)}`)


// }

// eurDolYen(100);



// AXIOS

const axios = require('axios');

const EUR_URL = 'https://api.exchangerate-api.com/v4/latest/EUR';
const USD_URL = 'https://api.exchangerate-api.com/v4/latest/USD';

const euros = 100;

console.log(`Importe inicial en ${euros}`);

async function eurDolYen(euros){
   
    const dataEUR= await axios.get(EUR_URL);
    // Ahora necesitamos acceder a las propiedad "rates" de "data" para hacer la primera conversion
    const dollars = euros * dataEUR.data.rates.USD;
    console.log(`${euros} equivalen a ${dollars.toFixed(2)}`)

    // Ahora obtnemos los ratios de conversion del dolar
    // En este punto que parece muy confuso lo que hacemos es obtener los ratios de conversion del dolar en una sola linea
    // en la que aplicamos fetch y luego el await pasando a json para obtener la data

    const dataUSD = await axios.get(USD_URL);

    // Realizamos la segunda conversion
    const yenes= euros * dataUSD.data.rates.JPY;
    console.log(`${dollars} equivalen a ${yenes.toFixed(2)}`)


}

eurDolYen(100);

