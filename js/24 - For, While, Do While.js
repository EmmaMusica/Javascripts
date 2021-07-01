//------------------For Loops--------------------------------------------------------------------------

/**Es un iterador. Cumple determinada cantidad de iteraciones mientras una condicion se cumpla. */

/**Dentro del paréntesis, el primer parámetro tiene en cuenta el indice (la cantidad de objetos de un arreglo por ejemplo),
 *  y define el numero de elemento sobre el cual empezar las iteraciones; el segundo parámetro indica sobre qué elemento
 *  terminar; y el tercer parámetro indica cómo variar la iteración.
 * 
 */
// En los siguientes casos se toma como ejemplo el valor mismo de i 


// for (let i=0; i<=10; i++) {
//     console.log(i);
// }


// entonces el for trabaja cada iteracion hasta que i sea igual o menor que 10



/**En el siguiente ejemplo ejecutamos un codigo que además nos diga, mientras se produce la iteracion
 *  si el número "actual" es par */
    
    // for (let i=0; i<=10; i++) {
    //     if(i % 2 === 0) {
    //         console.log(`El número ${i} es par`)
    //     }
    // }


// /** para ver todos los numeros impares en un conteo hasta 100 podemos usar en el if un  i % 2 === 1  ó  i % 2 !== 0 */
   
    //  for (let i=0; i<=100; i++){
    //      if(i % 2 !== 0) {
    //          console.log(`El número ${i} es impar`);
    //      }
    //  }

/**Podemos hacer un solo conteo y utilizar "else" ("caso contrario") */

// for (let i=1; i <=100; i++) {
//     if( i % 2 === 0) {
//         console.log(`El número ${i} es par`)
//     } else {
//         console.log(`El número ${i} es impar`);
//     }
// }

/** Entonces podemos ver que el for loop ejecuta un codigo mientras una condicion sea evaluada como verdadera,
 * y podemos pedirle que muestre o analice cada uno de esos datos en el momento de la iteracion.
 */

//For loop es ideal para Arreglos (Array)

/** forEach ES EL ITERADOR DE JAVASCRIPT TAMBIÉN, PERO EL for EXISTE EN TODOS LOS LENGUAJES */

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

// un arreglo tiene su indice desde el 0. 
// Y para conocer la extension de los objetos en el arreglo utilizamos carrito.length. Entonces:

// for ( i = 0 ; i < carrito.length ; i++ ) {
//     console.log( carrito[i] ); // mostramos cada elemento del carrito
//     console.log( carrito[i].nombre ); //accede al nombre del objeto del arreglo  (sintaxis de punto)
// };



//------------------While Loops---------------------------------------------------------------------



// let i = 0; //indice o valor inicial

// while (i < 10) {  //condicion

//     console.log(i);

//     i++; //incremento
// }

//------------------Do While Loops----------------------------------------------------------------------

let i = 0;

do {

    console.log(i);

    i++;
} while (i < 10);



/**LA PRINCIPAL DIFERENCIA ENTRE UN WHILE Y UN DO WHILE ES QUE:
 *  
 *  -EN EL WHILE: SI LA CONDICION NO SE CUMPLE ENTONCES EL CODIGO NO SE EJECUTA
 *  
 *  -EN EL DO WHILE: NO IMPORTA SI LA CONDICION NO SE CUMPLES, EL CODIGO SE EJECUTA AL MENOS UNA VEZ
 * 
 */