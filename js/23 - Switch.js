//------------------------Switch---------------------------

/**Switch es una opcion alternativa a If, Else if, Else, para los casos en que hay que usar demasiados If */

const metodoPago = 'efectivo';

switch(metodoPago) {
    case 'tarjeta':
        console.log('Metodo de pago valido');
        break;
    case 'cheque':
        console.log('Cheque: Metodo de pago a validar');
        break;
    case 'efectivo':
        console.log('Pago con efectivo contra reembolso');
        break;
    default:
        console.log('Pago rechazado');
        break;
    }