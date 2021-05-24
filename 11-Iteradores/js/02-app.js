// for ( let i = 0; i < 10; i++ ) {
//     if( i === 5 ) {
//         console.log(`${i} cinco`);
//         continue;
//     }  
//     console.log(i);
// }

const carrito = [
    { nombre: 'Monitor 27', precio:500},
    { nombre: 'Celular', precio:800},
    { nombre: 'iPad', precio:600, descuento: true},
    { nombre: 'Teclado', precio:100},
    { nombre: 'procesador i7', precio:700}
]

for ( let i = 0; i < carrito.length; i++ ) {
    if (carrito[i].descuento) {
        console.log(`el producto ${carrito[i].nombre} tiene descuento`);
        continue;
    }
    console.log(`${carrito[i].nombre}`);
}