// 4) devolver un array con las notas de los estudiantes
const students = [
    {
        name: 'Jose',
        grades: [1, 2, 3]
    },
    {
        name: 'María',
        grades: [10, 9, 8]
    }
]


// Solucion Clasica

// let averageGrades = [];

// for (let student of students) {
//     let suma = 0;

//     for (let grade of student.grades) {
//         suma += grade
//     }

//     averageGrades.push(suma/student.grades.length);
// }

// console.log(averageGrades);


// 2. Solucion con MAP


// let averageGrades = students.map( function (student) {
//     let suma = 0;

//     for (let grade of student.grades) {
//         suma += grade;
//     }

//     return suma/student.grades.length;
// });

// console.log(averageGrades);


// // 3. Solucion 3
// // EN vez de poner " students.map(function(student))" pondemos "students.map(=>)"

// let averageGrades = students.map( student => {
//     let suma = 0;

//     for (let grade of student.grades) {
//         suma += grade;
//     }

//     return suma/student.grades.length;
// });

// console.log(averageGrades);

// SOLUCIÓN 4: arrow function que procesa student. 
// Hacemos una funcion arrow para calcular la media de cada estudiante y luego esta la pasamos para todos los estudiantes con map

// const calculaMedia = student => {
//     let suma = 0;

//     for (let grade of student.grades) {
//         suma += grade;
//     }

//     return suma/student.grades.length;
// }

// let averageGrades = students.map( calculaMedia );

// console.log(averageGrades);


// SOLUCIÓN 5
const average = numbers => {
    let total = 0;

    for (let number of numbers) {
        total += number;
    }

    return total/numbers.length;
}

let averageGrades = students.map( (student) => average(student.grades) );

console.log(averageGrades);


