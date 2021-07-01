//------------------------Objetos---------------


const producto = {
    nombreProducto: "Monitor HD",// todo lo que esta dentro de las llaves son propiedades del objeto
    precio: 300,
    disponible: true
}

//una variable no puede ser modificada, un objeto si. 
// si queremos que un objeto no se modifique debemos congelarlo:

//Se puede agragar propiedades al producto por fuera, es decir:

producto.detalles = 'En perfecto estado';


//--- Object.freeze(producto);-----//no permite agregar ni borrar propiedades, ni modificarlos

Object.seal(producto); //no permite agregar ni borrar propiedades, pero si modificarlas

producto.precio = 'Nuevo Precio';

producto.imagen = 'imagen.jpg';
//entonces esta propiedad de imagen no se agrega al producto

console.log(producto);