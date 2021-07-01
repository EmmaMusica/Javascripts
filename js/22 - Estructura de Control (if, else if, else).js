//--------------Estructuras de control-----------------

/*Los 2 signos de igual (==) son un comparativo, JS revisa que coincida la variable con la condicion
    del if, además en JS tambien podemos usar otro comparativo más estrico que sería con los 3 signos de igual (===)
    en este caso revisa tambien que coincida el tipo de dato, porque podria darse la coincidencia de '1000' en string
    que es tecnicamente igual a 1000 en mumeros. Con los == esto ultimo es valido. Con los === no*/

/**---- if : "Si se cumple..."" 
 *----- else if: " Y si se cumple otro..."
 *----- else: "caso contrario..." */


const puntaje = 100;

 //para que la condicion busque un igual: (== ó ===)
if (puntaje === 1000){   
     console.log('Si, el puntaje es 1000');
} else {
    console.log('No es igual.');
}

//para que la condicion busque un distinto: (!==)
if (puntaje !== 1000){   
    console.log('Si, el puntaje es 1000');
} else {
   console.log('No es igual.');
}


const efectivo = 1000;
const carrito = 800;

if( efectivo > carrito){
    console.log('Pago confirmado');
} else {
    console.log('Fondos insuficientes');
}

//

const rol = 'EDITOR';   

if(rol === 'ADMINISTRADOR'){
    console.log('Acceso a todo el sistema');
}   else if(rol==='EDITOR') {
    console.log('Acceso parcial al sistema')
}  else{
    console.log('Acceso denegado');
}