 //-------------Funciones que retornan un valor-----------------
 
 function sumar(n1, n2) {
     return n1 + n2;
 };

// sumar(2, 3); ----> así mismo no nos muestra nada en la consola ya que el valor "retorna".
// hay que definir una nueva variable para mandar a llamar la funcion:

const resultado = sumar(2, 3);

// y despues podemos mostrar el resultado en la consola

console.log(resultado);


let total = 0  /** Noten que creamos una variable let para poder luego reasignarle un valor, ya que con const no se puede */


function agregarCarrito(precio) {
    return total += precio;    /**retornamos el precio y lo acumulamos al total. "+=" es para acumular */
}

function calcularImpuesto(total){
    return 1.15 * total;
}

total = agregarCarrito(200)
total = agregarCarrito(400)
total = agregarCarrito(600)


console.log(total);

const totalAPagar = calcularImpuesto(total);

console.log(`El total a pagar es de: $${totalAPagar}`);  /** Noten que siempre que vamos a combinar variables numericas 
con String debemos utilizar las comillas de tilde invertida (``) que seria la notacion de los Template String,
y dentro poner "${}" para distinguir la variable numerica */
