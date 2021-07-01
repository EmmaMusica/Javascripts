// Variables con const

//Principal diferencia con let es que no se puede inicializar una variable sin valor. 
//Tampoco podemos reasignar un valor. El valor de cada variable debe de ser constante...

const producto = 'Audifonos Gamer'; // Iniciar variable y asignarle valor // Puede ser comillas dobles tambien, pero nunca combinarlas



const disponible = true; // variable iniciada pero sin valor - ESTO NO SE PUEDE HACDR CON const - Para ello deberias utilizar let


//producto = true; // Reasignando el valor de la variable *************

//disponible = true; // Tampoco se puede reasignar un valor a una variable ******************

/* Las variables const tienen reglas:
        * Pueden contener numeros pero no pueden iniciar con uno:
            ---> var 1disponible = true   *NO*
            ---> var disponible1 = true   *SI*
        * "-" tampoco se permite al inicio.
        * "_" Si se permite al inicio y al final.
*/

//Creando varias variables a la vez:
const producto1 = 'Computadora',
    disponible1 = true  ,
    categoria = 'Computadoras';


//Estilos para las variables
const nombre_producto = 'Monitor HD'; //Underscore
const nombreProducto = 'Monitor HD' ; //Camelcase
const NombreProducto = 'Monitor HD' ; //Pascal Case
const nombreproducto = 'Monitor HD' ; //Lower Case