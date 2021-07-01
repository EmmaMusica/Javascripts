//----------------- Arreglos o Arrays----------------


// Sirven para combinar elementos relacionados o del mismo tipo.
// Un ejemplo es un carrito de compras.


const numeros = [10,20,30,40,50];

console.log(numeros);
console.table(numeros); // retorna la informacion en una table, ideal para arreglos

const meses = ['enero', 'febrero', 'marzo', 'abril', 'mayo'];
const meses = new Array('enero', 'febrero', 'marzo', 'abril', 'mayo'); // Sintaxis 'Constructor', sirve tambien para los demás tipos de variables

// const meses2 = ["enero", "febrero", "marzo"];

// console.table(meses2);

// //se puede mezclar todo tipo de datos con los arreglos:

// const arreglo = ["Hola", 10, true, {nombre: "Juan", correo: "asf@correo.com"}, null, 'diez', [1 , 2 , 3]];
//  console.table(arreglo);

//  //Acceder a los valores de un arreglo:

//  console.log(numeros[4]); // el 4 representa la posicion del 4to valor del Arrelgo. gracias al indice que nos muestra la tabla podemos verlo con facilidad.
//  console.log(numeros[2]);

//  //Conocer la extensión de un arreglo:

//  console.log(meses.length); //en este caso hay 3 valores, y ese sería el resultado.

//  numeros.forEach( function(numero) {
//      console.log(numero);
//  })            // con forEach y la respectiva funcion creada retorna todos los valores del arreglo.




//------ESTRUCTURA DE DATOS---------



//------------Cómo agregar valores a los arreglos---------


numeros [5] = 60; // no es la más comun, ya que hay que conocer la extensión del arreglo, para sumarle uno mas
// si se utiliza una posición que ya existe lo va a modificar. Por lo tanto también es un modificador

numeros.push(70); //con esto siempre se agraga al final. No hace falta conocer la extension del arreglo
numeros.push(70, 80, 90); 

numeros.unshift(-20, -10, 0); // esto los agrega al inicio de los valores.



//-------------  meses.pop();     // elimina el ultimo elemento
//-------------  meses.shift();   // elimina el primer elemento

meses.splice(2, 1);  //--- Elimina el elemento número 2 (sería el 3er elemento porque siempre se cuenta desde el 0) y apartir de ahí solo 1 elemento
//es decir, el primer valor de Splice selecciona el elemento, el segundo todos los elementos a eliminar desde esa ubicación.
//Entonces eliminamos Marzo

console.log(numeros);
console.log(meses);


// Si bien todo esto es muy importante saber, se recomienda ultimamente no modificar los datos de los arreglos. 
// Lo ideal siempre es crear arreglos con valores nuevos.

//-----------  Rest Operator o Spread Operator-----

const nuevoArreglo = [...meses, 'Junio']; // modifica el arreglo "meses" sumando "junio" al final -- Similar a meses.push('Junio')
const nuevoArreglo2 = [ 'Junio', ...meses]; // modifica el arreglo "meses" sumando "junio" al inicio -- Similar a meses.unshif('Junio')

console.log(nuevoArreglo);
console.log(nuevoArreglo2);
 