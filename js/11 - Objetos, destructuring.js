//----------------------Objetos-------------------

const producto = {
    nombreProducto: "Monitor HD",// todo lo que esta dentro de las llaves son propiedades del objeto
    precio: 300,
    disponible: true
}

//Forma Anterior
//const precioProducto = producto.precio;
//const nombreProducto = producto.nombreProducto;

//console.log(nombreProducto);
//console.log(precioProducto);

//Destructuring
//const {precio} = producto;
//const {nombreProducto} = producto;

const {precio, nombreProducto} = producto;

console.log(precio);
console.log(nombreProducto);