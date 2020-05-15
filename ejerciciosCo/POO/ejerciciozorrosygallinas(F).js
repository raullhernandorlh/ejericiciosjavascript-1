// Ejercicio de Zorros y Gallinas con Funciones

// //paso 1 los zorros se comen las gallinas
// const establo = [{ animal: "zorro" }, { animal: "gallina" }];

// function granja(establo) {
//   if (establo[0].animal !== establo[1].animal) {
//     return establo.filter((item) => {
//       return item.animal === "zorro";
//     });
//   } else {
//     console.log("Animales iguales");
//   }
// }


// console.log(establo, granja(establo));

// paso 2 every para comprobar si tenemos que criar

const establo = [{ animal: "gallina" }, { animal: "zorro" }];

function granja(establo) {
  const sameAnimal = establo.every((item) => {
    return item.animal === establo[0].animal;
  });
  if (sameAnimal) {
    console.log("Animales iguales");
  } else {
    return establo.filter((item) => {
      return item.animal === "zorro";
    });
  }
}

