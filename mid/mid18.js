/**
 * Funciones
 * 
 * Crea una función que reciba un array y un número y 
 * devuelva cuántos números del array son mayores que 
 * el indicado por parámetro
 * 
 * 
 */


 function getHigherThan(numbers,tresHold){
     let count=0;

        for (let number of numbers){
            if(number > tresHold){
                count++;
            }
        }
    return count;
 }


 const tresHold = 5;
 const values = [1,2,3,4,5,6,7,8];
 const counter = getHigherThan(values, tresHold);

 console.log(`El numero de valores mayores de ${tresHold} es ${counter}`);


