// A partir de las personas sacar el animal que tienen más personas como mascota
// Mapeamos las personas para quedarnos con el animal que es su mascota
const myPets = persons.map((person) => {
    // Buscamos su mascota en el array de mascotas
    return pets.find((pet) => {
      return person.pet === pet.name;
    }).animal;
    // De la mascota nos quedamos solo con el animal que es, el string
  });
  
  /**
   * En este reduce vamos a hacer un array, que recontará cuantos animales de cada tipo hay
   * Ejemplo de estructura de datos:
   * [{name:'tigre',ammount:2},.......]
   */
  const animalRanking = myPets.reduce((accumulator, pet) => {
    // Miramos si nuestra estructura de datos ya tiene insertado este animal
    // Buscamos su posicion
    const petIndex = accumulator.findIndex((item) => {
      return item.name === pet;
    });
    // Si este animal ya estaba insertado
    if (petIndex > -1) {
      // E incrementamos su cantidad
      accumulator[petIndex].ammount++;
    } else {
      // Sino creamos esta entrada en el array
      accumulator.push({ name: pet, ammount: 1 });
    }
    return accumulator;
  }, []);
  
  // Vamos a hacer un reduce en el que devolveremos solo el animal mas repetido
  const mostPopularAnimal = animalRanking.reduce((biggest, item) => {
    // Comparamos si el acumulador tiene mas cantidad que el elemento que queremos comparar
    return biggest.ammount > item.ammount ? biggest : item;
  });
  
  console.log(mostPopularAnimal);
  