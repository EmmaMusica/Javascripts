//------------Array Methods----------

const meses = ['enero', 'febrero', 'marzo', 'abril', 'mayo']; //se le dice arreglo unidimensional

//se puede tener arreglo de objetos
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

//forEach  -------------> para iteraciones, es decir, mostrar todos o algunos valores
meses.forEach(function(mes){
    if (mes == 'marzo') {
    console.log('Marzo si existe');
    }
});

//Includes   --> Reempaza al forEach con el If //****Pero sirve solamente para arreglos unidimensionales */

let resultado = meses.includes ('marzo');


//Some  --> Ideal para arreglo de objetos.

resultado = carrito.some(function(producto){
    return producto.nombre === 'Celular'             // Siempre acceder a cada propiedad --> producto.nombre - producto. precio
})

//Reduce ---> Se utiliza para acumular las iteraciones, es decir, una sumatoria.

resultado = carrito.reduce(function(total, producto) {
    return total + producto.precio
}, 0); //-----> el 0 representa el valor inicial sobre el cual empieza la suma. Por eso el resultado es la suma de todos los precios.




// Filter ----> Filtrado

resultado = carrito.filter(function(producto){
    return producto.precio > 400
});

resultado = carrito.filter(function(producto){
    return producto.nombre === 'Celular' //-----> busca todos los que sean Celular
});

resultado = carrito.filter(function(producto){
    return producto.nombre !== 'Celular'  //-----> tiene el simbolo de negacion "!==" , busca todo lo que no sea Celular
});

console.log(resultado);