//--------------------------------FUNCIONES------------------------------------------

/*-- Las funciones en cualquier lenguaje de programacion son una serie de procedimientos o instrucciones
 que realizan una accion 
 --Una ventaja de las funciones es que te permiten tener un codigo mas ordenado y mas facil de mantener
 y que son reutilizables. Podriamos por ejemplo tener una funcion que envie datos a un servidor y 
 utilizarla multiples veces.
 Existen 3 formas de crear funciones:
 - 1ro La declaracion de la funcion
 - 2do la Expresion de la funcion
 - 3ro IIFE
 */



 //--------Declaración de función----------------------------------

/*Se crea la funcion */
 function sumar() {
        console.log(10 + 10);
 }

/*Se la manda a llamar */ 
sumar();




//--------Expresion de la funcion------------------------------------

/*Primero se crea la funcion y luego se la manda a llamar*/


const sumar2 = function() {
    console.log(3 + 3);
};


sumar2();



//--------IIFE---------------------------------------------------

/*No hace falta llamar a la funcion.
Estas son funciones especiales para proteger las variables, ya que las funciones pueden leer variables de otros 
archivos.
Con las funciones IIFE se las protege para que no colisionen con el codigo que estemos realizando.*/


(function() {
    console.log('Esto es una funcion');
})();



//-----------------HOISTING-------------

/*La principal diferencia entre las funciones Declaradas y las Expresadas (ademas de sus sintaxis)
es que las declaradas funcionan en congruencia con el Hoisting de JavaScript, es decir, que a las 
funciones declaradas podemos mandarlas a llamar y luego definirlas, pero a las Expresadas no.*/

/*El HOISTING de JavaScript es nada mas que la forma de trabajo que utiliza el lenguaje, donde realiza 2 lecturas
la primera lee siempre la funcion, y la segunda todos los llamados. Es por eso que a las funciones declaradas podemos
escribir primero el llamado y luego definirlas.*/