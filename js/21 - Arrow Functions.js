//---------------------Arrow Functions---------------


//En la Declaracion de la funcion no se puede utilizar las Arrow Functions
//Por eso debemos hacer uso de la Expresion de la Funcion

//Expresion de la funcion:
const sumar1 = function(n1, n2) {
    console.log(n1 + n2);
};
//Pasado a Arrow Function:
const sumar2 = (n1, n2) => {
    console.log(n1 + n2);
};     
// ****LAS LLAVES SON OPCIONALES****:
const sumar3 = (n1, n2) => console.log(n1 + n2); 

sumar1(5, 10);
sumar2(5, 10);
sumar3(5, 10);

//Estructura basica para un Arrow Function:

const aprendiendo = (tecnologia) => {
    console.log(`Aprendiendo ${tecnologia}`)
};

aprendiendo('JavaScript');   //Se expresó y se mandó a llamar la función. Con sus respectivos parámetros y argumentos.



/**Otra forma de Expresar */
/**Noten que si es un solo parámetro podemos eliminar los parentesis, si son varios parametros hay que poner 
 * parentesis y separar con (,) */

const aprendiendo2 = tecnologia2 => console.log(`Aprendiendo ${tecnologia2}`);  

aprendiendo2('JavaScript');


//Array Methods y Array Function

const meses = ['enero', 'febrero', 'marzo', 'abril', 'mayo']; //se le dice arreglo unidimensional

//se puede tener arreglo de objetos
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

/**SIEMPRE SE REEMPLAZA EL "function" por "=>", si hya un solo parametro se eliminan los parentesis
y si hay un return se lo toma como implicito, es decir, se lo elimina y junto con el a sus llaves*/

//forEach  -------------> para iteraciones, es decir, mostrar todos o algunos valores
meses.forEach(mes => {
    if (mes == 'marzo') {
    console.log('Marzo si existe');
    }
});

let resultado;

//Some  --> Ideal para arreglo de objetos.
resultado = carrito.some(producto => producto.nombre === 'Celular') // Siempre acceder a cada propiedad --> producto.nombre - producto. precio
    



//Reduce ---> Se utiliza para acumular las iteraciones, es decir, una sumatoria.

resultado = carrito.reduce((total, producto) => total + producto.precio, 0); //-----> el 0 representa el valor inicial sobre el cual empieza la suma. Por eso el resultado es la suma de todos los precios.




// Filter ----> Filtrado

resultado = carrito.filter((producto) => producto.precio > 400  //el return queda implicito y es eliminado junto con sus llaves
);


resultado = carrito.filter(producto=> producto.nombre === 'Celular' //-----> busca todos los que sean Celular
);


resultado = carrito.filter(producto => producto.nombre !== 'Celular'  //-----> tiene el simbolo de negacion "!==" , busca todo lo que no sea Celular
);

console.log(resultado);

