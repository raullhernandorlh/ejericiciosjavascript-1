// TRY (try...catch especifica un bloque de código que se intentará ejecutar 
//y que se deberá hacer en caso de que salte una excepción)

try {
    nonExistentFunction();
  }
  catch(error) {
    console.error(error);
  }

  
  //  THROW (Con throw podemos lanzar nuestra propia excepción)

  try {
    throw 'myException'; // genera una excepción
  }
  catch (e) {
    console.log(e);
  }

  
  // Finally (se ejecuta despues de que try y catch terminen de ejecutarse)

  try {
    doThis;
  }
  finally {
    doOtherThing(); // Siempre se ejecuta después del try
  }
  