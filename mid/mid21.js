/**
 * Tenemos una tienda online. 
 * 
 * Los productos disponibles se representan con un array de objectos
 * con la siguiente estructura:
 * 
 * {
 *    id: 
 *    name: 'TV LG',
 *    quantity: 2
 *    price: 400
 * }
 *  
 * Escribe una función que reciba dicho array y calcule el precio a pagar
 * por un cliente. Ten en cuenta la cantidad `quantity` de cada producto
 * y su precio `price`
 */



 let products = [
    {
        id : 1,
        name :'TV LG',
        quantity: 2,
        price : 800
    },

    {
        id : 2,
        name :'TV Panasonic',
        quantity: 2,
        price : 400
    },

    {
        id : 3,
        name :'TV Samsung',
        quantity: 2,
        price : 500
    }
 ]

//  Precio a pagar
 let suma = 0;

 for (let product of products){
     suma += (product.quantity * product.price);
 }

 console.log(`Èl precio a pagar por todos los productos sera de ${suma}`);