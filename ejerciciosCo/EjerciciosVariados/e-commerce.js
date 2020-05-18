const itemNames = ['Camisa', 'Pantalon', 'Calcetines'];
const itemPrices = [13, 27, 100];

// Creamos la clase Item con los dos atributos obligatorios "name" y "price"

class Item {
  name;
  price;
  constructor(name, price) {
    this.name = name;
    this.price = price;
  }
}

// Creamos la clase CartItem que hereda de item y nos construimos un objteo item con los atributos heredados
// de Item . Esto lo hacemos con super 

class CartItem extends Item {
  ammount = 1;

  constructor(item) {
    super(item.name, item.price);
    
  }
  // Metodo para incrementar la cantidad de items

  increaseAmmount() {
    this.ammount++;
  }

  get total() {
    return this.ammount * this.price;
  }
}

class User {
  #shoppingCart = [];
  // Metodo addToCart para meter articulos en el carrito. Metemos el item en el carrito. Hacemos un find para ver si el objeto
  // que vamos a meter en el carro coincido con otro que ya estaba metido en el carro. Si coincide aumentamos en 1 y sino creamos
  // un nuevo objeto para el carro 

  addToCart(item) {
    const itemFound = this.#shoppingCart.find((cartItem) => {
      return item.name === cartItem.name;
    });
    if (itemFound) {
      itemFound.increaseAmmount();
    } else {
      this.#shoppingCart.push(new CartItem(item));
    }
  }

  get cart() {
    return this.#shoppingCart;
  }

  fillCart(inventory, ammount) {
    for (let i = 0; i < ammount; i++) {
      const inventoryIndex = Math.floor(Math.random() * inventory.length);
      this.addToCart(inventory[inventoryIndex]);
    }
  }

  buy() {
    Shop.checkout(this.#shoppingCart);
  }
}

class Shop {
  static checkout(shoppingCart) {
    console.log(`Hack a Shop`);

    const initialTotals = { totalPrice: 0, totalUnits: 0 };
    const totals = shoppingCart.reduce((accumulator, currentItem) => {
      console.log(
        `${currentItem.name} ${currentItem.price}€ ${currentItem.ammount}U Total de item: ${currentItem.total}`
      );
      accumulator.totalPrice += currentItem.total;
      accumulator.totalUnits += currentItem.ammount;
      return accumulator;
    }, initialTotals);

    console.log(`Unidades totales ${totals.totalUnits}, Suelta ${totals.totalPrice}€`);
  }
}

const inventory = itemNames.map((name, index) => {
  return new Item(name, itemPrices[index]);
});

const myUser = new User();
myUser.fillCart(inventory, 30);
myUser.buy();
