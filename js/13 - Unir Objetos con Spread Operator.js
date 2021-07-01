//------------------Unir Objetos con el Spread Operator----------------


const producto = {
    nombreProducto: "Monitor HD",// todo lo que esta dentro de las llaves son propiedades del objeto
    precio: 300,
    disponible: true
};

const medidas = {
    peso: '1kg',
    medida: '1m'
};

const nuevoProducto = { ...producto, ...medidas }; //combina las propiedades de los objetos

console.log(producto);
console.log(nuevoProducto);

// La buena practoca nos dice que es lo ideal no debe ser modificar objetos, sino agruparlos.