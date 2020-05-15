//Ejemplo atributo privado y metodo para obtenerlo
// Para hacer un atributo privado basta con ponerle # delante del atributo

class User{
    #creditCard;
    cosntructor(creditCard){
        this.#creditCard = creditCard;
    }

    getCreditCard(){
        return this.#creditCard;
    }
}

const myUser = new User(111111111);

console.log(myUser);
console.log(User);
// No se porque me da undefined
console.log(myUser.getCreditCard());
  