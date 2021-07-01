//--------------------Try Catch-------------------

/**Con try catch logramos ver detallar el error de la linea con problemas sin dejar de ejecutar todo el codigo
 * porque en caso de no utilizarlo el codigo deja de ejecutarse a partir de la linea con error
 */


const numero1 = 10;
const numero3 = 20;

console.log(numero1);
try{
    console.log(numero2);       //numero2 no esta definido, por ende saltaría un error en esa linea
} catch(error){
    console.log(error);
}

console.log(numero3);