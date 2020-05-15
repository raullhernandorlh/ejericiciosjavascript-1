// Creamos animal con patas y ojos 

class Animal{
    constructor(patas,ojos){
        this.patas = patas;
        this.ojos = ojos;
    }
    tellLegs(){
        console.log(this.patas);
    }
}

class Perro extends Animal{
    constructor(name,patas){
        super(patas,2) // Cogemos del padre
        this.name = name;
    }
    speak(){
        console.log("Guau",this.name);
    }
}

class Gato extends Animal {
    constructor(name){
        super(4,2); // Hereda los atributos de la clase padre . 4 patas y 2 ojos
        this.name = name;
    }
    speak() {
        console.log('MIAU', this.name);
      }
    
}

class Arana extends Animal {
    constructor() {
      super(8, 8);
    }
  
    tellLegs() {
      console.log('Tengo', this.patas);
    }
  }

  const myDog = new Perro("Rufo",4);
  console.log(myDog);

  const myOtherDog = new Perro("Rex", 4);
  console.log(myOtherDog);

  const mySpider = new Arana();
  console.log(mySpider);

  // Creo mi gato y solo le especifico el nombre porque las patas y los ojos estan definidas en el constructor
  // provenientes del super 

  const myCat = new Gato("Isidoro");
  console.log(myCat);

  // Cuando ya tengo creados mis objetos perro y gato puedo aplicar metodos speak sobre ellos

  myDog.speak();
  myOtherDog.speak();
  myCat.speak();


//---------------------------------------------------------------------------------------------------------------


//Equiivalente a class con funciones

  function perro(name) {
    this.name = name;
    this.speak = function () {
      console.log(this.name);
    };
  }
  const troski = new perro('Troski');
  const firulais = new perro('Firulais');
  
  troski.speak();
  
