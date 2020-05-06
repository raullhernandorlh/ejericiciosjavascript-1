/**
 * Escribe una aplicación que escriba por pantalla
 * la generación a la que pertenece una persona nacida
 * en el año indicado en la variable `birthYear`
 * 
 *   - Z (1995 - actualidad)
 *   - millenials (1981 - 1994)
 *   - generación X (1969 - 1980)
 *   - baby boom (1949 - 1968)
 * 
 */


 birthYear = 2015;

 if (birthYear > 1949 &&  birthYear<= 1968) {
    console.log("Usted pertenece a la generacion del baby boom");
 }

 else if(birthYear >= 1968 && birthYear <= 1980) {
    console.log("Usted pertenece a la generacion X");
 }

 else if(birthYear >= 1981 && birthYear <= 1994) {
    console.log("Usted pertenece a la generacion de los millenials");
 }

 else{
    console.log("Usted pertenece a la generacion Z");
 }


//  birthYear = 1983

//  Z_START = 1995;
//  MILLENIAL_START = 1981;
//  X_START = 1969;
//  BABY_BOOM_START = 1949;

//  if (birthYear > Z_START) {
//      console.log('Z');
//  } else if (birthYear > MILLENIAL_START) {
//      console.log('millenial')
//  } else if (birthYear > X_START) {
//      console.log('X')
//  } else {
//      console.log('baby boom')
//  }
