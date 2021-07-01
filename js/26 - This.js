//------------------------------------This---------------------------------

/**Con this tenemos la posibilidad de acceder a una propiedad de un objeto cuando
 * utilizamos una funcion dentro del objeto mismo. */

const reservacion = {
    nombre: `Juan`,
    apellido: "De la Torre",
    total: 5000,
    pagado: false,
    informacion: function() {
        console.log(`El cliente ${reservacion.nombre} tiene un total a pagar de $${reservacion.total}`)
    } //**************no puede ser un "arrow function"******************* */
}
reservacion.informacion();


const reservacion2 = {
    nombre: `Pedro`,
    apellido: "De la Torre",
    total: 5000,
    pagado: false,
    informacion: function() {
        console.log(`El cliente ${this.nombre} tiene un total a pagar de $${this.total}`)
    }
}
reservacion2.informacion();


/**EN EL CASO DE QUE EN EL OBJETO UTILIZARIAMOS UN ARROW FUNCTION ENTONCES HABRIA QUE DEFINIR UNA VARIABLE APARTE
 * YA QUE EL ARROW FUNCTION HACE REFERENCIA A LA VENTANA GLOBAL, Y LA OTRA DEFINICION DE LA FUNCION HACE REFERENCIA
 * A SU POSICION EN UN OBJETO O EN LA VENTANA MISMA.  */