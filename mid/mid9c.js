N=2
values = [1, 2, 3, 4, 5, 6, 7];
output = [];

fistTargetSubarray = values.slice(values.length - N, values.length);
console.log(fistTargetSubarray);

secondTargetSubarray = values.slice(0, values.length - N);
console.log(secondTargetSubarray);

output = [fistTargetSubarray,secondTargetSubarray];


// Con la funcion "flag" juntamos los dos arrays en uno es decir pasamos de tener [6,7] y [1,2,3,4,5] a [6,7,1,2,3,4,5]
output = output.flat();
console.log(output);