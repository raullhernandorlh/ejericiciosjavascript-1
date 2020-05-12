// Generadores
// El generador mantiene su contexto a lo largo de la aplicacion

// function* serie(){
//     yield 1;
//     yield 10;
//     yield 100;
//     yield 10000;
// }

// const genSerie = serie();
// console.log(genSerie.next());
// console.log(genSerie.next());
// console.log(genSerie.next());
// console.log(genSerie.next());
// console.log(genSerie.next());

function* subSerie(){
    yield 'Hola';
    yield 'Estoy en otro generador';
}

function* serie(i){
    yield i;
    yield i + 5;
    yield* subSerie();
    yield i * 10;
    yield i * 20;
}

const genSerie = serie(50);
console.log(genSerie.next());
console.log(genSerie.next());
console.log(genSerie.next());
console.log(genSerie.next());
console.log(genSerie.next());
console.log(genSerie.next());