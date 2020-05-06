/**
 * Operando con más de dos elementos: Arrays
 * 
 * Para prácticar con los arrays, se proponen las siguientes actividades:
 *    - calcula la media de los elementos que sean mayores o iguales que 5;
 * 
 */

grades = [7.9, 9.11111, 1, 2];
sum_grades = 0;
contador = 0;

for (grade of grades)
{
    if(grade >=5){
        sum_grades = sum_grades + grade;
        contador++; 
    }
}

console.log(`Suma : ${sum_grades}`);
console.log(`La media de los numeros del array ${sum_grades/contador}`);
