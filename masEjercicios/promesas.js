
// Una promesa no puede tener dos estados al mismo tiempo. No puede esatr aceptada y rechazada a la vez

// let promesa = new Promise((resolve,reject)=>{
//     if(true){
//         resolve('La operacion fue un exito');
//     }else{
//         reject('Ocurrio un error')
//     }
// });

// Apliquemos a la promesa setTimeOut()

// Promesas . Una promesa no pude tener dos estados a la vez o se resuelve o es rechazada. 

// Ejemplo 1. Promesa con 'setTimeOut'
// Primero se ejecutara el console.log y a los 2 segundos (2000 milisegundos) se resolvera la promesa 

// let promesa = new Promise((resolve,reject)=>{
//     console.log('Pendiente...');
//     setTimeout(()=>{
//         resolve('Promesa resuelta correctamente');
//     },2000);

//     setTimeout(()=>{
//          reject('Ocurrio un error');
//     },3000);
// });

// promesa
//     .then((response)=>{
//         console.log('Response: ', response);
//     })
//     .catch((error)=>{
//         console.log('Error',error);
//     });


//     // Promise.All
//     // Si todas las promesas son resueltas con exito promise.all nos devolvera un arreglo
//     // con cada una de las promesas. Si ocurre un error Promise muestra el error de la promesa que se rechazo


//     let promesa1 = new Promise((resolve,reject) =>{
//     resolve('Primera promesa resuelta');
//     });

//     let promesa2 = new Promise((resolve,reject) =>{
//         setTimeout(() =>{
//         resolve('Segunda promesa resuelta');
//     },2000);
//     });

//     let promesa3 = new Promise((resolve,reject) =>{
//         setTimeout(() =>{
//         resolve('Tercera promesa resuelta');
//     },3000);
//     });

//     let promesa4 = new Promise((resolve,reject) =>{
//         setTimeout(() =>{
//         resolve('Cuarta promesa resuelta');
//     },5000);
//     });

//     Promise.all([promesa1,promesa2,promesa3,promesa4])
//         .then((values)=>{
//             console.log('LOs valores son',values);
//         })
//         .catch((error) =>{
//             console.log('Ocurrio un error',error);
//         });

///-------------------------------------------------------
// Promise.race
// Con race en vez de devolverme todas las promesas  Me devuelve solo la que se ejecuta en primer lugar
// o mas rapido . En este caso seria la tercera promesa la que me devuelve ya qye tiene un 'setTimeOut'
// mas pequeño

    // let promesa2 = new Promise((resolve,reject) =>{
    //     setTimeout(() =>{
    //     resolve('Segunda promesa resuelta');
    // },1500);
    // });

    // let promesa3 = new Promise((resolve,reject) =>{
    //     setTimeout(() =>{
    //     resolve('Tercera promesa resuelta');
    // },500);
    // });

    // let promesa4 = new Promise((resolve,reject) =>{
    //     setTimeout(() =>{
    //     resolve('Cuarta promesa resuelta');
    // },5000);
    // });

    // Promise.race([promesa2,promesa3,promesa4])
    //     .then((values)=>{
    //         console.log('LOs valores son',values);
    //     })
    //     .catch((error) =>{
    //         console.log('Ocurrio un error',error);
    //     });

    // let promesa2 = new Promise((resolve,reject) =>{
    //     setTimeout(() =>{
    //     resolve('Segunda promesa resuelta');
    // },1500);
    // });

    // let promesa3 = new Promise((resolve,reject) =>{
    //     setTimeout(() =>{
    //     resolve('Tercera promesa resuelta');
    // },500);
    // });

    // let promesa4 = new Promise((resolve,reject) =>{
    //     setTimeout(() =>{
    //     resolve('Cuarta promesa resuelta');
    // },5000);
    // });

    // Promise.race([promesa2,promesa3,promesa4])
    //     .then((values)=>{
    //         console.log('LOs valores son',values);
    //     })
    //     .catch((error) =>{
    //         console.log('Ocurrio un error',error);
    //     });


// Promesas encadenadas

// En este caso aunque tenemos 4 promesas solo estamos jugando con las 2 primeros. En el caso de que la primera no se resuelva
// no se resuelven ninguna de las dos. Puede resolverse la primera y no resolverse la segunda. Pero la segunda no puede resolverse
// sin la primera

let primeraPromesa = new Promise((resolve,reject)=>{
    resolve('Primera promesa exitosa');
});

let segundaPromesa = new Promise((resolve,reject)=>{
    resolve('Segunda promesa erronea');
});

let ultimaPromesa = new Promise((resolve,reject)=>{
    resolve('Ultima promesa exitosa');
});

primeraPromesa
    .then(
        response => {
            console.log(response);
            return segundaPromesa;
        },
    )
    .then(
        ValorSegundaPromesa =>{
            console.log(ValorSegundaPromesa);
            return ultimaPromesa;
        }
    )
    .then(
        ValorUltimaPromesa =>{
            console.log(ValorUltimaPromesa);
        }
    )
    .catch(
        error => {
            console.log('error',error);
        }    
    )




