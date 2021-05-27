// .reduce -> tomar una gran cantidad de datos, unirlos y entregar un resultado


const carrito = [
    { nombre: 'Monitor 27 Pulgadas', precio: 500 },
    { nombre: 'Televisión', precio: 100 },
    { nombre: 'Tablet', precio: 200 },
    { nombre: 'Audifonos', precio: 300 },
    { nombre: 'Teclado', precio: 400 },
    { nombre: 'Celular', precio: 700 },
]


//queremos decirle al usuario cuanto pagar

//con un for each
let total = 0;
carrito.forEach(producto => total += producto.precio);
console.log(total);

// con un reduce
let resultado = carrito.reduce( (total, producto) => total + producto.precio, 0 );
console.log(resultado);