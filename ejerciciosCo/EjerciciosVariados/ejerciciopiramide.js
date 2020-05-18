// Piramide1
// *
// **
// ***



// function imprimirPiramide1(){
//     let asterisco ='*';
//     for (let i=0; i<3;i++){
//         console.log(asterisco);
//         asterisco = asterisco + "*"
//     }
// }

// imprimirPiramide1()


// Piramide 2  
//   *
//  **
// ***

// let altura = 3;
// function imprimirPriramide2(){
//     let asterisco ='*';
//     for(i=0;i<altura; i++){
//         console.log(asterisco);
//         asterisco + "*" = asterisco
//     }
// }
// imprimirPiramide2()


// Piramide 3
//   *
//  ***
// *****


// let floors =3
// function imprimirPiramide3(floors){
//     let asterisco = "*";
//     for(i=0;i<floors; i++){
//         console.log(asterisco);
//         asterisco = "*" + "*" + asterisco;
//     }
// }

// Piramide 4

//   *
//  ***
// *****
//  ***
//   *

// let floors =5
// function imprimirPiramide3(floors){
//     let asterisco = "*";
//     for(i=0;i<floors; i++){
//         console.log(asterisco);
//         if(floors < 3){
//             asterisco = "*" + "*" + asterisco;
//         }
//         else{
//             console.log("*"+"*"+"*");
//             console.log("*");
//         }  
//     }
// }
// imprimirPiramide3(floors); 



//EJERCICIOS REALIZADOS POR EL PROFESOR


// function printFloorNumbers(floors) {
//     for (let i = 0; i < floors; i++) {
//       console.log(`Piso ${i + 1}`);
//     }
//   }
//   printFloorNumbers(5);
  
//   // Piramide 1 : PIRAMIDE A DERECHAS DE 5 PISOS
  
//   function buildFloor(size) {
//     let floor = '';
//     for (let i = 0; i < size; i++) {
//       floor = floor + '*';
//     }
//     return floor;
//   }
  
//   function printPyramid1(floors) {
//     for (let i = 0; i < floors; i++) {
//       console.log(buildFloor(i + 1));
//     }
//   }
  
//   console.log(printPyramid1(5));

// PIRAMIDE 2 - PIRAMIDE A IZQUIERDAS DE 5 PISOS

// function buildFloor(size, brick) {
//     let floor = '';
//     for (let i = 0; i < size; i++) {
//       floor = floor + brick;
//     }
//     return floor;
//   }
  
//   function printPyramid(height) {
//     for (let i = 0; i < height; i++) {
//       console.log(buildFloor(height - (i + 1), ' ') + buildFloor(i + 1, '*'));
//     }
//   }
  
//   printPyramid(5);
  
  