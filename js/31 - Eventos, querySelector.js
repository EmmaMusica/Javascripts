const boton = document.querySelector('#boton'); // selecciona el elemento del documento html <boton> CON LA VARIABLE BOTON
boton.addEventListener('click', () => {
    Notification.requestPermission() //-------> es el evento que ordenamos a dar al hacer click.
        .then(resultado => console.log(`El resultado es ${resultado}`))
})

//Todo esto está ya registrado para se escrito de esta manera... por la API de Notification predeterminada de JS:
if(Notification.permission == 'granted') {
    new Notification('Esta es una notificación', { //Titulo de la notificacion
        icon: 'img/ccj.png', //imagen de la notifiacion   
        body: 'Codigo con Juan, los mejores tutoriales.' // texto de la notificacion    
    })
}