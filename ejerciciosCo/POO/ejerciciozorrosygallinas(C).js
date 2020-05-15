// Ejercicio de zorros y gallinas con Clases


// Creo la clase animal
class Animal {}

// Creo la clase gallina que extiende de Animal

class Gallina extends Animal {
  // Breed se traduce como raza
  breed() {
    return new Gallina();
  }
}

// Creo la clase zorro que extiende de Animal

class Zorro extends Animal {
  breed() {
    return new Zorro();
  }

  hunt(establo) {
    return establo.filter((animal) => {
      return animal.constructor.name === 'Zorro';
    });
  }
}

class Granja {
  establo;
  constructor(establo) {
    this.establo = establo;
  }
  closeDoors() {
    if (this.establo[0].constructor.name === this.establo[1].constructor.name) {
      this.establo.push(this.establo[0].breed());
    } else {
      const myFox = this.establo.find((animal) => {
        return animal.constructor.name === 'Zorro';
      });
      this.establo = myFox.hunt(this.establo);
    }
  }
}

const establo = [new Zorro(), new Zorro()];

const myFarm = new Granja(establo);
myFarm.closeDoors();
console.log(establo, myFarm);




