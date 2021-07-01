//------------------------- Async - Await ------------------------------

function descargarNuevosClientes() {
    return new Promise (resolve => {
        console.log('Descargando clientes... espere...');

        setTimeout(() => {
            resolve('Los Clientes fueron descargados')
        }, 5000);
    })
}
function descargarUltimosPedidos() {
    return new Promise (resolve => {
        console.log('Descargando pedidos... espere...');

        setTimeout(() => {
            resolve('Los Pedidos fueron descargados')
        }, 3000);
    })
}

/**Para hacer funcionar 2 Promise a la vez con async await se utiliza "Promise.all([])" y dentro van 
 * las funciones separadas por ","
 */

async function app(){ 
    try {
        // const clientes = await descargarNuevosClientes(); 
        // const pedidos = await descargarUltimosPedidos();
        // console.log(clientes);     
        // console.log(pedidos);
                                
        const resultado = await Promise.all([descargarUltimosPedidos(),descargarNuevosClientes() ])
        console.log(resultado[0]); //-- Utilizando los selectores de arreglos [0], [1] hacemos que 
        console.log(resultado[1]); //-- no se muestren los resultados en forma de arreglos


    } catch (error) {
        console.log(error);
    }
    
    
}

app();


//console.log('Este codigo tampoco se bloquea');


/*************************************************************************************
 * Como se puede observar en la consola, todo lo que esta en el async despues del await se va a ejecutar cuando 
 * el await se cumple, y todo el resto, se ejecuta normalmente, podriamos decir que el async se ejecuta en segundo plano.
 ****************************************************************************** */



// ----------// 'setTimeout' es una funcion que se utiliza para ejecutarse luego de un tiempo determinado
// setTimeout( function() {   
//     console.log('set timeout...')
// }, 5000); // el valor 5000 es en milisegundos, por lo que seria igual a 5 segundos



// -------------// 'serIntervals' hace que se reproduzca una funcion determinada en intervalos de tiempos determinados

// setInterval( function() {   
//     console.log('set timeout...')
// }, 5000)
