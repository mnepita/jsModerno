//For of

const pendientes = ['tarea', 'estudiar', 'leer', 'correr'];

const carrito = [
    { nombre: 'Monitor 27', precio:500},
    { nombre: 'Celular', precio:800},
    { nombre: 'iPad', precio:600},
    { nombre: 'Teclado', precio:100},
    { nombre: 'procesador i7', precio:700}
]

for (let pendiente of pendientes) {
    console.log(pendiente);
}

for (let producto of carrito) {
    console.log(producto);
}