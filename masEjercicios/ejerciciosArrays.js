// Ejercicios Arrays

// Ejercicio1
//Programar una funcion que dado un array numerico devuelve otro array con los numeros elevados al cuadrado

const devolverCuadrados = (arr=undefined)=>{
    if(arr === undefined)return console.log("Error. No ingresaste nada");
    if(!(arr instanceof Array)) return console.log("Error.Has de ingresar un arreglo");
    if(arr.length === 0) return console.log("Error.EL arreglo esta vacio");

    for(let num of arr){
        if(typeof num !== "number"){
            console.log("Error. El elemento/s ingresado/s en el array no son numeros")
        }
    }

    const newArr = arr.map(elemento => elemento * elemento);

    return console.info (`El arreglo original es ${arr} y el arreglo elevado al cuadrado es ${newArr}`);
}

devolverCuadrados();
devolverCuadrados(0);
devolverCuadrados("Hola");
devolverCuadrados([1,2,3,4,5,6,7,11,25,76]);


// EJercicio 2
// Programa una funcion en la que dado un array devuelva el numero mas alto y el numero mas bajo

const arrayMinMax = (arr = undefined)=>{
    if(arr === undefined)return console.log("Error. No ingresaste nada");
    if(!(arr instanceof Array)) return console.log("Error.Has de ingresar un arreglo");
    if(arr.length === 0) return console.log("Error.EL arreglo esta vacio");


    for(let num of arr){
        if(typeof num !== "number"){
            console.log("Error. El elemento/s ingresado/s en el array no son numeros")
         }
    }

    // Spread operation
    // Podemos ver que  los metodos "Math.max" y "Math.min" requieren de spread operation(...). El spread operation sirve
    // para recorrer el array e ir comprobando los numeros del array uno a uno


    return console.info(`El numero mas alto del array ${arr} es ${Math.max(...arr)}. El numero mas pequeño sera ${Math.min(...arr)}`);

}

// arrayMinMax();
// arrayMinMax(0);
// arrayMinMax("Casa");
// arrayMinMax([1,2,3,4,5,6,7,8]);


// Ejercicio 3
// Programa una funcion que dado un array de numeros devuelva un objeto con dos arreglos. En el primero almacena los numeros
// pares y en el segundo almacenara los numeros impares

const separarParesEImpares = (arr = undefined)=>{
    if(arr === undefined)return console.log("Error. No ingresaste nada");
    if(!(arr instanceof Array)) return console.log("Error.Has de ingresar un arreglo");
    if(arr.length === 0) return console.log("Error.EL arreglo esta vacio");


    for(let num of arr){
        if(typeof num !== "number"){
            console.log("Error. El elemento/s ingresado/s en el array no son numeros")
         }
    }

    // Spread operation
    // Podemos ver que  los metodos "Math.max" y "Math.min" requieren de spread operation(...). El spread operation sirve
    // para recorrer el array e ir comprobando los numeros del array uno a uno


    return console.info({
        pares:arr.filter(num => num % 2 === 0),
        impares: arr.filter(num => num %2 === 1)
        
    })
    
}
console.log("Hola");
separarParesEImpares();
separarParesEImpares(0);
separarParesEImpares("casa");
separarParesEImpares([]);
separarParesEImpares([1,2,3,4,5,6,7,8,9,0]);


