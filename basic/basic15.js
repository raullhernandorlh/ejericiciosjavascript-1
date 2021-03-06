/**
 * El objetivo de este ejercicio es hacer una calculadora, 
 * súper simplificada, del IRPF. El IRPF es un impuesto que 
 * pagamos al Estado proporcional a nuestros ingresos. Además, 
 * se aplica por tramos, como se indica a continuación:
 *  
 * Tramos IRPF 2019
 *   Desde 0 hasta 12450€: 19%              
 *   De 12450€ a 20200€: 24%
 *   De 20200€ a 35200€: 30%
 *   De 35200€ a 60000€: 37%
 *   Más de 60000€: 45%
 * 
 * Así, una persona que haya ganado 10000 euros, pagaría el 19% de esos 10000. 
 * Si hubiese ganado 15000 euros, pagaría el 19% de los 12450 primeros euros, 
 * y el 24% de la diferencia entre 15000 y 12450.
 * 
 * Disclaimer: este es un cálculo súper simplicado, la fórmula real incluye 
 * muchísimas variables
 * 
 */

// *     - mayor (>)
// *     - menor (<)
// *     - menor o igual (<=)
// *     - igual (===)
// *     - distinto (!==)



salarioBruto = 60000;

inicial = 12450
medio = 20200
medioAlto = 35200
alto = 60000
irpfInicial = (12450 * 0.19)
irpfMedio = irpfInicial + ((20200 - 12450) * 0.24)
irpfMedioAlto = irpfMedio + ((35200 - 20200) * 0.3)
irpfAlto = irpfMedioAlto + ((60000 - 35200) * 0.37)

if (salarioBruto <= inicial) {
    console.log(`IRPF: ${ salarioBruto*0.19}`)
} else if (salarioBruto > inicial && salarioBruto <= medio) {
    console.log('IRPF: ' + (irpfInicial + ((salarioBruto - inicial) * 0.24)));
} else if (salarioBruto > medio && salarioBruto <= medioAlto) {
    console.log('IRPF: ' + (irpfMedio + ((salarioBruto - medio) * 0.3)))
} else if (salarioBruto > medioAlto && salarioBruto <= alto) {
    console.log('IRPF: ' + (irpfMedioAlto + ((salarioBruto - medioAlto) * 0.37)))
} else {
    console.log('IRPF: ' + (irpfAlto + ((salarioBruto - alto) * 0.45)))
}


//  let ingreso = 70000;
//  let totalAPagarTramo1 = 10000 * 0.19 ;
//  let totalAPagarTramo2 = 10000 * 0.24 ;
//  let totalAPagarTramo3 = 10000 * 0.30 ;
//  let totalAPagarTramo4 = 10000 * 0.37 ;
//  let totalAPagarTramo1 = 10000 * 0.45 ;


//  if(ingreso >=0 && ingreso <= 12450)
//  {
//      console.log(`Usted tendria que pagar : ${totalAPagarTramo1}`)
//  }

//  else if(ingreso >= 12450 && ingreso <= 20200)
//  {
//      console.log(`Usted tendria que pagar : ${totalAPagarTramo2}`)

//  }

//  else if(ingreso >= 20200 && ingreso <= 25200)
//  {
//      console.log(`Usted tendria que pagar : ${totalAPagarTramo3}`)

//  }
//  else if(ingreso >= 35200 && ingreso <= 60000)
//  {
//      console.log(`Usted tendria que pagar : ${totalAPagarTramo4}`)

//  }

//  else if(ingreso > 60000)
//  {
//      console.log(`Usted tendria que pagar : ${totalAPagarTramo5}`)
//  }
