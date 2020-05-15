const user = { name: 'Ivan', pet: 'perro', city: 'La Coru' };

const { name, lastName, ...rest } = user;
try {
  console.log(name, lastName, rest);
} catch (e) {
  console.log(e);
}

console.log('Esto se ejecuta');
