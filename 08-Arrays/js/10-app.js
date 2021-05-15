//Metodo .map()

const carrito = [
    { nombre: 'Monitor 27', precio:500},
    { nombre: 'Celular', precio:800},
    { nombre: 'iPad', precio:600},
    { nombre: 'Teclado', precio:100},
    { nombre: 'procesador i7', precio:700}
]

//forEach
carrito.forEach(producto => {
    console.log(producto); 
});

map()

const nuevoArreglo = carrito.map(function(producto){
    return `${producto.nombre}`;
})

console.log(nuevoArreglo);