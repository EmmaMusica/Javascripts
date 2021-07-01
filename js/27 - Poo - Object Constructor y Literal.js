//---------------------------------------POO----------------------------------------------------------



//------Object Literal
/** el object literal es la forma en que se "arma" el objeto */

const producto = {
    nombre: 'Tablet',
    precio: 500
}


//------Object Constructor-------------------
/**De esta manera se trata de conseguir una forma de definir (o armar) varios objetos que comparten los mismos tipos
 *  de propiedades, es decir, "Nombre, Precio, Disponible, etc."
 */

function Producto(nombre, precio, disponible) {        // Class o generador de objetos, funcion para generar objetos
    this.nombre = nombre;                             //aquí definimos la funcion para construir los objetos
    this.precio = precio;
    this.disponible = disponible;
}

const producto2 = new Producto('Auriculares', 1400, true);
const producto3 = new Producto('Cámara', 30000, false);   //aquí otorgando los argumentos estamos ya dando las propiedades
const producto4 = new Producto('Micrófono', 5000, true);



//****Con prototype le damos formato */ *****************************************************************************
//Nos permite crear funciones en un objeto en especifico


Producto.prototype.formatearProducto = function() {
    return `El producto ${this.nombre} tiene un precio de $${this.precio}`
}

console.log(producto3.formatearProducto())




//-------Analogamente: --------------------

function Cliente(nombre, apellido){
    this.nombre = nombre;
    this.apellido = apellido;
}

const cliente = new Cliente('Emmanuel', 'Araujo');
const cliente2 = new Cliente('Florencia', 'Graf');



Cliente.prototype.formatearCliente = function() {
    return `El Cliente ${this.nombre} ${this.apellido}`
}

console.log(cliente2.formatearCliente())

