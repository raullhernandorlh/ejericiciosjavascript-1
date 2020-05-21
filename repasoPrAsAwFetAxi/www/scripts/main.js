// SET INTERVAL



// // Asi empezamos un set interval
// const showMessage = setInterval(() => console.log('Esto se repite cada 2 segundos'),2000);

// // Metodo 1 : Cancelar el "setInterval" de forma instantanea

// // clearInterval(showMessage);


// // Metodo 2 : cancelar el "setInterval" cuando pasen "x" segundos

// const stopMessage = setTimeout(() =>  clearInterval(showMessage),7000);



// EJEMPLO ALARMA


function alarm(secondsToRing){
    let seconds = 1;
    const clock = setInterval(() =>{
        if(seconds === secondsToRing){
            console.log("RING RING RING");
            clearInterval(clock);
        }else{
            console.log("Segundo" + seconds)
            seconds++;
        }
    },1000);

}

alarm(5)