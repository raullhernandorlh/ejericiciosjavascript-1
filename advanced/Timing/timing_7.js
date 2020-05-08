/**
 * Fechas, setTimeout, setInterval 
 * 
 * Además de `setTimeout`, Javascript nos ofrece otra función 
 * para temporizar: `setInterval`. En este caso, la función
 * que se pasa como primer argumento se ejecutará periódicamente.
 * 
 * La manera de cancelar esta ejecución periódica es haciendo uso de
 * la función `clearInterval`.
 * 
 * En el siguiente ejemplo, se configura `setInterval` para llamar a
 * la función `suena` cada dos segundos. Además, se establece un 
 * temporizador con `setTimeout` para cancelar el intervalo a los 4 segundos
 * y 50 milésimas.
 */


 function pintaHola(){
     console.log("Hola, pinta ola");
 }

 function suena(){
    console.log("Suena!!!")
 }

//  pintaHola();

 // Creamos un intervalo para que la alarma suena cada 2 segundos
 intervalId = setInterval(suena,2000);

setTimeout(function(){
    clearInterval(intervalId)
},8000);