// Date 

let today = new Date()
let birthday = new Date('December 17, 1995 03:24:00')
// let birthday = new Date('1995-12-17T03:24:00')
// let birthday = new Date(1995, 11, 17)           
// let birthday = new Date(1995, 11, 17, 3, 24, 0)

// Si queremos medir el tiempo que lleva hacer algo podemos ver la diferencia entre dos fechas
let start = new Date()

// The event to time goes here:
// funcionQueTarda()


//Por ejemplo, para convertir los milisegundos en días, 
//divida el número por 86.400.000 (1.000 milisegundos x 60 segundos x 60 minutos x 24 horas).
let end = Date.now();
let elapsedDays = Math.round((end - birthday) / (86400000))  // En milisegundos
let elapsedYears = Math.round(elapsedDays/365);

console.log(elapsedDays);
console.log(elapsedYears);



// DESTRUCTURING

// let userData = ["Perico","Palotes"];
// let [firstName, userName] = userData;

// console.log(firstName,userName);


// Podemos ignorar elementos dejando huecos

let userData = ["Perico","el de los","Palotes"];
let [firstName, ,userName] = userData;
console.log(firstName,userName);

// Con la sintaxis de rest podemos guardar el resto de valores que 
//no hayamos asignado con destructuring. Estos quedarán en un array.

// let [name1,name2,...rest] = ["Itxaso","Raul","Mertxe","Jose Antonio","Berta"];
// console.log(name1);
// console.log(name2);
// console.log(...rest);

// MUY IMPORTANTE - ASIGNAR VALORES POR DEFECTO
//También podemos asignar valores por defecto 
//en caso de que no se asigne ningún valor a la variable con destructuring

// let [name = "sin nombre", apellido = "sin apellido"] = ["Ivan"];
// console.log(name);
// console.log(apellido);

// ASIGNACIONES POR DESTRUCTURING A OBJETOS

let user = {
    nombre : "Raul",
    apellido : "Lopez",
    edad: 34
}

// let {nombre,apellido,edad} = user;
// console.log(user.nombre);
// console.log(user.apellido);
// console.log(user.edad);



// ASIGNACIONES POR DESTRUCTURING A OBJETOS


let gallego = {
	name: 'Ivan',
	pet: 'dog',
	city: 'A Coruña'
};

let {name, ...rest} = gallego;
console.log(name);
console.log(...rest);




