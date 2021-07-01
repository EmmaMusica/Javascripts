
//-----------------------------Classes----------------------------

/**Las Clases siempre se denotan con Mayusculas // se utiliza la palabra reservada class  */

class Producto {    //-------------------------> Producto es el nombre de la clase
    constructor(nombre, precio){ //-------------> Constructor es la funcion para 
        this.nombre = nombre;
        this.precio = precio;
    }
    formatearProducto() {
        return `El producto ${this.nombre} tiene un precio de: $${this.precio}`
    }
    precioProducto(){ //------------------>Metodo, no funcion
        return `El precio del producto seleccionado es de: $${this.precio}`
    }
}

//----------------------------------HERENCIA-----------------
// se utiliza herencia para evitar duplicar codigo, es recomendable siempre esto en programacion


class Libro extends Producto {          //-----------> con extends elegimos la clase de la cual heredar, en este caso Producto
        constructor(nombre, precio, isbn){
            super(nombre, precio); //-------> con "super()" logramos heredar las propiedades del "constructor" padre
            this.isbn = isbn;
        }
        formatearProducto() {
            return `${super.formatearProducto()} y su isbn es ${this.isbn}` /**En este caso vamos como tambien con super.
            accedemos al valor de return del metodo formatearProducto del producto padre */
        }
}

/**Instanciamos */

const libro = new Libro(`Javascript, la Revolución`, 120, 01234657)

//-------------<<< Siempre mandar a llamar el metodo tambien

console.log(libro)
console.log(libro.formatearProducto())

const producto = new Producto(); //--------A esto se le llama instanciar

const producto2 = new Producto('Auriculares', 1400, true);
const producto3 = new Producto('Cámara', 30000, false);   //aquí otorgando los argumentos estamos ya dando las propiedades
const producto4 = new Producto('Micrófono', 5000, true);

console.log(producto2);
console.log(producto3);
console.log(producto4);

console.log(producto3.formatearProducto())
console.log(producto2.formatearProducto())
console.log(producto2.precioProducto())