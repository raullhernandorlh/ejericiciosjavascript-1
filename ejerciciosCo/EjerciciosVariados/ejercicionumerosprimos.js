
// // Un numero es primo cuando es divisible entre si mismo o la unidad

// function isPrime(numberToCheck) {
//     for (let i = 2; i < numberToCheck; i++) {
//       if (numberToCheck % i === 0) {
//         return false;
//       }
//     }
//     return true;
//   }
  
//   function printPrimes(limit) {
//     for (let i = 2; i <= limit; i++) {
//       if (isPrime(i) === true) {
//         console.log(i);
//       }
//     }
//   }
  
//    function printFirstPrimes(limit) {
//     let primesFound = 0;
//     for (let i = 2; primesFound <= limit; i++) {
//       if (isPrime(i)) {
//         console.log(i);
//         primesFound++;
//       }
//     }
//   }
  
//   printPrimes(100);
//   printFirstPrimes(100);
  

function isPrime(numberToCheck){
    for(i=2; i<numberToCheck; i++){
        if(numberToCheck % i === 0){
            return false;
        }
    }
    return true;
}

  function printPrimes(limit) {
    for (let i = 2; i <= limit; i++) {
      if (isPrime(i) === true) {
        console.log(i);
      }
    }
  }


function firstPrintPrimes(limit){
    let primesFound =0;
    for(let i =2; i<limit ; i++){
        if(isPrime(i)){
            console.log(i);
            primesFound++;
        }
    }
}


printPrimes(3);
// firstPrintPrimes(100);

