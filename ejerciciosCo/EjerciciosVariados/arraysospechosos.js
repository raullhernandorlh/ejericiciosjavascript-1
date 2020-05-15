const names = ['Willy', 'Ivan', 'Ramiro'];
const eyeColor = ['azul', 'marron', 'azul'];
const height = ['bajo', 'alto', 'alto'];
const tattooed = [true, false, false];

// Constrimos un array de clases "tip"
const tip = [
  {
    height: 'alto',
  },
  {
    eyeColor: 'marron',
  },
  {
    tattooed: false,
  },
];

// Construimos una clase sospechoso donde le metemos el array de objetos como propiedad privada y lo 
// inicializamos en el constructor

class Suspect {
  name;
  eyeColor;
  height;
  tattooed;
  #tip;
  constructor(suspectData) {
    this.name = suspectData.name;
    this.eyeColor = suspectData.eyeColor;
    this.height = suspectData.height;
    this.tattooed = suspectData.tattooed;
    this.#tip = suspectData.tip;
  }
  // Entiendo que creamos un constructor confess() y le metemos el array de objetos de tipo
  // como confesion del sospechoso

  confess() {
    return this.#tip;
  }
}

// Hacemos una clase detective en el que pasamos la clase sospechosos. NO ENTIENDO INVESTIGATE()
class Detective {
  #suspects;
  constructor(suspects) {
    this.#suspects = suspects;
  }

  investigate() {
    for (const suspect of this.#suspects) {
      console.log(suspect.confess());
    }
  }
}

const suspects = names.map((name, index) => {
  return new Suspect({
    name: name,
    eyeColor: eyeColor[index],
    height: height[index],
    tattoed: tattooed[index],
    tip: tip[index],
  });
});

const myDetective = new Detective(suspects);
console.log(myDetective.investigate());

