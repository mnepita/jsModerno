//ForEach - ideal para recorrer arreglos

const pendientes = ['tarea', 'estudiar', 'leer', 'correr'];

pendientes.forEach( (pendiente, i) => console.log(`${pendiente} ${i}`));


const carrito = [
    { nombre: 'Monitor 27', precio:500},
    { nombre: 'Celular', precio:800},
    { nombre: 'iPad', precio:600},
    { nombre: 'Teclado', precio:100},
    { nombre: 'procesador i7', precio:700}
]

const nuevoArreglo = carrito.forEach( producto => `producto: ${producto.nombre}`);

//Map crea un arreglo nuevo
const nuevoArreglo2 = carrito.map( producto => `producto: ${producto.nombre}`);

console.log(nuevoArreglo);
console.log(nuevoArreglo2);