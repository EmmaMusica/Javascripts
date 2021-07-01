//-----------------Metodo de propiedad------------

/**Siguen siendo funciones pero son muy utiles como una sintaxis mas de metodo. llegan a ser muy comunes
 * porque mantienen la informacion en un objeto. Cuando creas un proyecto grande tienden a ser una buena opcion
 * de estructurar un proyecto*/

const reproductor = {
    reproducir: function(id){
        console.log('Reproduciendo Canción con el ID: ${3840}');
    },
    pausar: function() {
        console.log('Pausando...')
    },
    crearPlaylist: function(nombre){
        console.log(`Creando la PlayList: ${nombre}`)
    },
    reproduciendoPlaylist: function(nombre){
        console.log(`Reproduciendo la PlayList: ${nombre}`)
    }
}
/**Ya que es un objeto podemos tambien agregar una propiedad o funcion por fuera de la estructura, es decir:*/

reproductor.borrarCancion = function(id){
    console.log(`Eliminando la canción con el ID: ${id}`);
}

reproductor.reproducir(3840); //de esta forma accedemos a llamar a los valores de los objetos, osea con el metodoo de propiedad
reproductor.pausar(); //mandamos a llamar
reproductor.borrarCancion(20);
reproductor.crearPlaylist("Emmanuel Song's")
reproductor.reproduciendoPlaylist("Emmanuel Song's")