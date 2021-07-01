//--------String o Cadenas de texto------

const tweet = 'Aprendiendo JavaScript con el curso de Desarrollo Web completo';
const producto2 = "Monitor de HD";
const producto4 = "Monitor de 30\""; //Se utiliza una diagonal invertida para "escapar" de la " del final.
                                        // Lo ideal sería utilizar comillas simples

const producto5 = String("Monitor de 50 Pulgadas");//Sintaxis no muy comunes de usar
const producto3 = new String("Monitor de 55 Pulgadas");//Sintaxis no muy comunes de usar

console.log(tweet.length);  //-------.length es una propiedad que se utiliza para conocer la extension, es decir, cuenta el numero de caracteres ingresados.
console.log(producto2);
//console.log(producto2);
//console.log(producto3); 

//--------IndexOF------------
// **** Retorna la posicion
console.log(tweet.indexOf('JavaScript')); // IndexOf se utiliza para encontrar un elemento en un String,
                                            //en este caso, una palabra. El valor a mostrar sería 12.

console.log(producto2.indexOf('Tablet')); // el valor a mostrar sería -1, ya que Tablet no se encuentra.

//------------Includes----------
// **** Retorno true o false
console.log(tweet.includes('JavaScript'));
console.log(producto2.includes('Tablet')); 


charAt(i)	//Retorna el caracter especificado del indice

charCodeAt(i)	//Devuelve el Unicode del carácter en el índice especificado
const nombre = 'Emma', apellido = 'Araujo';
console.log(nombre.concat(nombre, araujo))	//Une 2 o más strings y retorna uno string nuevo resultante de la unión.

endsWith()	//Comprueba si un string termina con una cadena/caracteres especificados

fromCharCode()	//Convierte valores Unicode en caracteres

includes()	// Comprueba si una cadena contiene la cadena/caracteres especificados

indexOf()	//Devuelve la posición de la primera aparición encontrada de un valor especificado en una cadena.

lastIndexOf()	//Devuelve la posición de la última aparición encontrada de un valor especificado en una cadena

localeCompare()	//Compara dos cadenas en la configuración regional actual

match()	//Busca una cadena para una coincidencia con una expresión regular y devuelve las coincidencias

repeat()	//Devuelve una nueva cadena con un número específico de copias de una cadena existente.

replace()	//Busca una cadena para un valor especificado, o una expresión regular, y devuelve una nueva cadena donde se reemplazan los valores especificados.

search()	//Busca en una cadena un valor especificado o una expresión regular y devuelve la posición de la coincidencia.

slice()	//Extrae parte de un string y retorna un nuevo string

split()	//Divide una cadena y la convierte en un array de varias subcadenas teniendo en cuenta un caracter especifico desde donde cortar

startsWith()	//Comprueba si una cadena comienza con caracteres especificados.

substr()	//Extrae los caracteres de una cadena, comenzando en una posición de inicio especificada y a través del número especificado de caracteres

substring()	//Extrae los caracteres de una cadena, entre dos índices especificados

toLocaleLowerCase()	//Convierte una cadena en letras minúsculas, según la configuración regional del host

toLocaleUpperCase()	//Convierte una cadena en letras mayúsculas, según la configuración regional del host

toLowerCase()	//Convierte un string a minúsculas

toString()	//Returns the value of a String object

toUpperCase()	//Transforma el string a Mayusculas

trim()	//Remueve los espacios en blanco al fina y al inicio del string

valueOf()	//Returns the primitive value of a String object