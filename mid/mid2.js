/**
 * Operando con más de dos elementos
 * 
 * ¿Serías capaz de calcular la media de las notas contenidas en el 
 * siguiente array?
 */

notas = [7.9, 9.11111, 1, 2];

suma = 0;

for (nota of notas){
    suma = suma + nota;
}

average = suma / notas.length
console.log(`La media de todas las notas es de ${average}`);

