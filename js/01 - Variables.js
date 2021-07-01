// Variables

var producto = 'Audifonos Gamer'; // Iniciar variable y asignarle valor // Puede ser comillas dobles tambien, pero nunca combinarlas

//"var" es palabra RESERVADA porque no puede haber na variable llamada "var", ya que se usa para preparar la variable.
// Todas los lenguajes tienen palabras reservadas

var disponible; // variable iniciada pero sin valor
// con "var" se puede crear la variable sin necesidad de designarle un valor

//producto = true; // Reasignando el valor de la variable

disponible = true; 


//Creando varias variables a la vez:
var producto1 = 'Computadora',
    disponible1 = true  ,
    categoria = 'Computadoras';


/* Las variables var tienen reglas:
        * Pueden contener numeros pero no pueden iniciar con uno:
            ---> var 1disponible = true   *NO*
            ---> var disponible1 = true   *SI*
        * "-" tampoco se permite al inicio.
        * "_" Si se permite al inicio y al final.
*/

/*      Estilos para las variables
            var nombre_producto = 'Monitor HD'; / Underscore
            var nombreProducto = 'Monitor HD' ; / Camelcase
            var NombreProducto = 'Monitor HD' ; / Pascal Case
            var nombreproducto = 'Monitor HD' ; / Lower Case
*/
console.log(producto); // Funciona porque tenemos la variable 'producto'

// console.log(PRODUCTO); // No funciona, porque siempre hay que respetar las minusculas y las mayuculas que utilicemos
