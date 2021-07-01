const usuarioAutenticado = new Promise( (resolve, reject) =>{ //-----> resolve y reject son los valores que van a variar
    const auth = false;
    if(auth){
        resolve('Usuario Autenticado');  //Se ejecuta cuando el Promise se cumple
    } else {
        reject('No se pudo iniciar sesion');   //Se ejecuta cuando el Promise no se cumple
    }
});

// -------------->  console.log(usuarioAutenticado); ---> Nos sirve solamente para ver el estado del Promise



// usuarioAutenticado
//     .then( function() { //-------------> el ".then" es importante para saber qué hacer con el promise
//         console.log('Desde el promise')
//     })


usuarioAutenticado
    .then( function(resultadopositivo){ //------> el .then va ase la funcion que nos muestra cuando la variable es "true"
        console.log(resultadopositivo)  //--Estas funciones tambien pueden ser arrow function ya que no hay "this"
    })
    .catch( function(resultadonegativo){ //-----> el .cath va a ser la funcion para mostrar cuando la variable es "false"
        console.log(resultadonegativo)   //--Estas funciones tambien pueden ser arrow function ya que no hay "this"
    })



/**En los Promises existen 3 valores posibles:
 * 
 * Pending: No se ha cumplido, pero tampoco se ha rechazado
 * Fulfilled: Ya se ha cumplido
 * Reject: Se ha rechazado o no se pudo cumplir
 */