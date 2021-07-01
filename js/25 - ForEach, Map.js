//-------------------------------------ForEach---------------------------------------

/** Es utilizado unicamente en arreglos 
 * se van a ejecutar una vez por cada elemento existente, a diferencia del For, While y Do While que
 * si no se especifican cómo iterar lo harían infinitas veces.
*/

const carrito = [
    {nombre: 'Monitor 20 pugadas', precio: 500},
    {nombre: 'Television 50 pugadas', precio: 700},
    {nombre: 'Tablet', precio: 300},
    {nombre: 'Audifonos', precio: 200},
    {nombre: 'Teclado', precio: 50},
    {nombre: 'Celular', precio: 500},
    {nombre: 'Bocinas', precio: 300},
    {nombre: 'Laptop', precio: 800},
]

carrito.forEach(function(producto){
    console.log(producto);           //si quisieramos acceder al "nombre" o al "precio" debemos usar la sintaxis de punto.
    // console.log(producto.precio);
    // console.log(producto.nombre);
})

carrito.forEach( producto => console.log(producto.nombre)) // AQUÍ con ARROW FUNCTION: *la flecha / las llaves*




//--------------------------------------map--------------------------------------

carrito.map(function(producto){
    console.log(producto);           //si quisieramos acceder al "nombre" o al "precio" debemos usar la sintaxis de punto.
    // console.log(producto.precio);
    // console.log(producto.nombre);
})

carrito.map( producto => console.log(producto.nombre)) // AQUÍ con ARROW FUNCTION: *la flecha / las llaves*

/**es utilizado unicamente en un arreglo 
* se van a ejecutar una vez por cada elemento existente, a diferencia del For, While y Do While que
* si no se especifican cómo iterar lo harían infinitas veces.
*/

/**PODEMOS VER QUE SON PRACTICAMENTE IGUALES */

/**Cuando hay que imprimir o solamente mostrar los elementos en pantalla es idael utilizar forEach
 * Cuando haya que formar un nuevo arreglo utilizamos map
 */

// Omitiendo el console.log (o return) que solo sirve para mostrarnos en pantalla, podemos observar que el map 
// nos devuelve informacion, el forEach no.

 const arreglo1 = carrito.forEach( producto => producto.nombre)

 const arreglo2 = carrito.map( producto => producto.nombre)

 console.log(arreglo1);
 console.log(arreglo2);

//Creando un nuevo arreglo

 const arreglo3 = carrito.map( producto => `${producto.nombre} - ${producto.precio}` )

 console.log(arreglo3);