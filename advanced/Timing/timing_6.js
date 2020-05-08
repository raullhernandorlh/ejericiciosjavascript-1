// 
//  * Fechas, setTimeout, Callbacks
//  * 
//  * Hemos visto como `setTimeout` recibe una función como parámetro.
//  * 
//  * Hasta ahora, las funciones las llamábamos nosotros directamente.
//  * Sin embargo, en este caso, esta función la va llamar el `setTimeout`
//  * internamente. Cuando las funciones se usan de esta manera se llaman 
//  * `callbacks`. Los callbacks se pueden declarar en el propio espacio
//  * para el parámetro, como en el ejemplo1, o bien declararlas como
//  * funciones independientes y simplemente poner su nombre al llamar a
//  * `setTimeout`
//  * 
//  * No se debe confundir pasar una función como parámetro con pasar el resultado
//  * de una función como parámetro. Si intentamos ejecutar el código del ejemplo3
//  * dará un error, ya que el primer parámetro que le pasamos a `setTimeout`
//  * no es un callback, que es lo esperado. En su lugar lo que estamos haciendo
//  * es llamar a la función `suena`, la cual como no tiene una clásula `return`
//  * devolverá `undefined` por defecto. Es decir, a `setTimeout` le estamos pasando
//  * `undefined` como primer parámetro, en lugar de una función.
//  * 


// 1. En este ejemplo ponemos un temporizador de dos segundos y al cabo de esto sale Sonando

// setTimeout(function(){
// console.log("Sonando!!!");
// },2000)

// 2. Hace lo mismo que en la primera lo que pasa es que nosotros hacemos la llamada a la funcion no se realiza desde la misma funcion
function suena() {
    console.log('Sonando!!!')
}
setTimeout(suena, 2000) 

// 3. Metemos como parametros de la llamada la funcion y el tiempo
setTimeout(suena(), 2000)


