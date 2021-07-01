async function obtenerEmpleados(){

    const archivo = 'empleados.json';

    // fetch('empleados.json')  ///---->con Promises (porque usamos .then)


    // .then( resultado =>  resultado.json() )    //---> los {} y el return se dió por implicito ya que es un arrow function
    // .then( datos => {
    //     //console.log(datos) )     //----> con esto solo extraemos el valor
        
    //     const {empleados} = datos;        //Aplicando destructuring creamos la variable y extraemos el valor a la vez
    //     console.log(empleados)})
        
    //     // empleados.forEach(empleado => {
    //     //     console.log(empleado);
    //     //     console.log(empleado.id);
    //     //     console.log(empleado.nombre);
    //     //     console.log(empleado.puesto);

    //     })

    // })

    const resultado = await fetch(archivo);  //con async await, obviamente se agrega el async al principio
    const datos = await resultado.json();
    console.log(datos);
}
obtenerEmpleados()


/**El Fetch lo que hace es buscar el archivo json para mostrarlo a traves de por ejemplo:
 * resultado.json() ---> que seria mostrarlo en forma de objeto
 * resultado.text() ---> que lo muestra coomo simple texto
 *  */