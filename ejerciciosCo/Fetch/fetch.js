// Hacer una petición a la siguiente url que nos devuelve los datos de la casa Targaryen de Juego de Tronos
// URL que nos devuelve los datos de los Targaryen
// https://www.anapioficeandfire.com/api/houses/378


// IMPORTANTE

// La "API Fetch" no esta implementada en Node.js
// Es necesario utilizar un modulo externo como "node-fetch"
// Para instalarlo simplemente nos vamos a la consola de visual code y escribimos
// npm i node-fetch --save
// Para poder utilizar el modulo externo deberemos hacer un require arriba del archivo
// const fetch = require("node-fetch");

const fetch = require("node-fetch");

function getRandomPosition(data){
    return Math.round(Math.random() * data.length);
}

async function getMembers(){
    
    // Lo primero que vamos a hacer es coger los datos de los Targaryen
    const houseRequest = await fetch('https://www.anapioficeandfire.com/api/houses/378');

    // Pasamos todo el string a objetos
    const houseData = await houseRequest.json();
    
    // Creamos un array para meter a todos los miembros de la familia Targaryen
    const allMembers = [];

    //Recuperar los datos de tres personajes al azar del array de 
    //"swornMembers" de la primera petición. Estos datos se tienen que mostrar todos a la vez.

    for(i = 0 ; i<3; i++){
        allMembers.push(fetch(houseData.swornMembers[getRandomPosition(houseData.swornMembers)]));
    }
    // En este punto los 3 datos que queremos obtener estan en pendiente
    //  [ Promise { <pending> }, Promise { <pending> }, Promise { <pending> } ]
    

    const allRequest = await Promise.all(allMembers);
    // En este punto obtenemos todas las repsuestas . Seran tres objetos de tipo Response como el de el siguiente ejemplo
    // Response {
    //     size: 0,
    //     timeout: 0,
    //     [Symbol(Body internals)]: { body: [Gunzip], disturbed: false, error: null },
    //     [Symbol(Response internals)]: {
    //       url: 'https://www.anapioficeandfire.com/api/characters/169',
    //       status: 200,
    //       statusText: 'OK',
    //       headers: [Headers],
    //       counter: 0
    //     }
    //   }

    // Recorremos todas las respuestas y las pasamos a JSON
    const allData = allRequest.map(async (request) => {
        return await request.json();
      });

    // Recorremos los datos de los tres swornMembers y mostramo su nombre
    // swornMemmbers = Miembros del jurado
    for (const member of allData) {
        const memberData = await member;
        console.log(memberData.name);
      }
    


}

 getMembers();
