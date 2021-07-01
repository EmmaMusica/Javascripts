//---------------Funciones con parametros y argumentos---------------


function sumar(numero1, numero2) {  //numero1 y numero2 son los paramertros
    console.log(numero1 + numero2);
}
sumar(2, 5);  //2 y 5 son los argumentos a sumar.
sumar(10, 200);
sumar(4,8);



const sumar2 = function(n1 = 0, n2 = 0, n3 = 0) {  //este tiene los valores por default (n1 = 0)    
    console.log(n1 + n2 - n3);
};
sumar2(10, 5, 5);