//map y forEach en ( ) => { }

const carrito = [
    { nombre: 'Monitor 27', precio:500},
    { nombre: 'Celular', precio:800},
    { nombre: 'iPad', precio:600},
    { nombre: 'Teclado', precio:100},
    { nombre: 'procesador i7', precio:700}
]

const nuevoArreglo = carrito.map( function(producto) {
   return `${producto.nombre}`;
});

const nuevoArreglo2 = carrito.map( producto => `${producto.nombre}`);


//forEach
const nvoArreglo = carrito.forEach( producto => {
    console.log(`${producto.nombre} - Precio: ${producto.precio}`); 
});

const nvoArreglo2 = carrito.forEach( producto => `${producto.nombre} - Precio: ${producto.precio}`);


console.log(nuevoArreglo);
console.log(nuevoArreglo2);