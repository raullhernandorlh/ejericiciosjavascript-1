//UTILIZANDO MAP , FILTER Y REDUCE



// Ejercicio1
// Programa una funcion que dado un arreglo de numeros devuelva un objeto con dos arreglos el primero tendra ordenados los numeros 
// de forma ascendente y el segundo de forma descendente





const ordenarArreglo  = (arr = undefined)=>{
    if(arr === undefined)return console.log("Error. No ingresaste nada");
    if(!(arr instanceof Array)) return console.log("Error.Has de ingresar un arreglo");
    if(arr.length === 0) return console.log("Error.EL arreglo esta vacio");


    for(let num of arr){
        if(typeof num !== "number"){
            console.log("Error. El elemento/s ingresado/s en el array no son numeros")
         }
    }


    return console.info({
        arr,
        asc:arr.map(elemento => elemento).sort(),
        desc:arr.map(elemento => elemento).sort().reverse()
    });
    
}

// ordenarArreglo();
// ordenarArreglo(1);
// ordenarArreglo("casa");
// ordenarArreglo([]);
// ordenarArreglo([5,7,15500,1,2,4,1,8,1000,3]);


//Ejercicio 2

// Programa una funcion que dado un arreglo de numeros elimine los duplicados

const eliminarDuplicados  = (arr = undefined)=>{
    if(arr === undefined)return console.log("Error. No ingresaste nada");
    if(!(arr instanceof Array)) return console.log("Error.Has de ingresar un arreglo");
    if(arr.length === 0) return console.log("Error.EL arreglo esta vacio");
    if(arr.length === 1) return console.log("Error.EL arreglo debe de tener al menos dos elementos");


    for(let num of arr){
        if(typeof num !== "number"){
            console.log("Error. El elemento/s ingresado/s en el array no son numeros")
         }
    }

    // Como funciona filter
    // En filter tenemos tres parametros. EL elemento a iterar (elemento), el indice de este elemento en el nuevo 
    // array (index) y self que gace referencia a el array original. En este caso le estamos diciendo que nos compare
    //  los elementos del array original y del array que se genera a traves de los indices de ambos y que genere un array
    // en el que introducira un elemento cada vez que ambos coincidan en el array

    // Set
    // Tambien podemos utilizar set ya que no nos permitiria duplicados.

    return console.info({
        arr,
        elementosduplicados:[...new Set(arr)]
        // elementosduplicados:arr.filter((elemento,index,self) => self.indexOf(elemento) === index)
    })
    
}

// eliminarDuplicados([1,1,2,2,3,3,true,true])



// Ejercicio 3
//Programa una funcion que dado un arreglo de numeros calcule el promedio

const promedio  = (arr = undefined)=>{
    if(arr === undefined)return console.log("Error. No ingresaste nada");
    if(!(arr instanceof Array)) return console.log("Error.Has de ingresar un arreglo");
    if(arr.length === 0) return console.log("Error.EL arreglo esta vacio");
    if(arr.length === 1) return console.log("Error.EL arreglo debe de tener al menos dos elementos");


    for(let num of arr){
        if(typeof num !== "number") return ("Error. El elemento/s ingresado/s en el array no son numeros") 
    }        

    return console.info({
        arr.reduce((total,num,index,arr)=>{
            total+ = num;
            if(index === arr.length-1){
                return (`El promedio de ${arr.join(" + ")} sera ${total/arr.length}`);
            }else{
                return total;
            }
        }
    })
}

promedio();
promedio([]);
promedio([1,5,6,7,12,7,8]);

