//----------Objetos-----------------

const nombreProducto = "Monitor HD";
const precio = 300;
const disponible = true;

//Objetos convierte varias variable en una sola

const producto = {
    nombreProducto: "Monitor HD",// todo lo que esta dentro de las llaves son propiedades del objeto
    precio: 300,
    disponible: true
}

/*

//Sintaxis de punto
 console.log(producto.precio);
 console.log(producto.nombreProducto);
 console.log(producto.disponible);

 //También

 console.log(producto["precio"]);

 */


//------------Agregar nuevas propiedades
producto.imagen = 'imagen.jpg';

//--------------Eliminar propiedades

delete producto.disponible;

console.log(producto);



 