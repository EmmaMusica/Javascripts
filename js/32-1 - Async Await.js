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

async function app(){ //-------------> el async prepara la funcion definida para que el awiat le del el "visto bueno" para ser ejecutada
    try {
        console.log('Este codigo no se bloquea') // este codigo no espera al await porque esta antes
        
        
        const clientes = await descargarNuevosClientes(); //----Es decir que sin el await la funcion seria ejecutada al instante
        //const pedidos = await descargarUltimosPedidos();
        console.log(clientes);     // para el Promise se utilizaba .then . pero cuando es asincrona (async) solo hace falta el await
        //console.log(pedidos);
        
        console.log('Este codigo se bloquea');// este codigo espera a que se ejecute el await
    
    } catch (error) {
        console.log(error);
    }
    
    console.log('app lista');
    console.log('Este codigo tambien se bloquea');
}

app();

console.log('Este codigo tampoco se bloquea');


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



