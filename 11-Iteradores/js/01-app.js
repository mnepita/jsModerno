// for( let i = 0; i <= 10 ; i++) {
//     console.log( i );
// }


//verificar si un numero es par o impar
// for ( let i = 1; i < 20; i++ ) {
//     if( i % 2 === 0) {
//         console.log(`el numero ${i} par`);
//     } else {
//         console.log(`el numero ${i} impar`);     
//     }
// }


const carrito = [
    { nombre: 'Monitor 27', precio:500},
    { nombre: 'Celular', precio:800},
    { nombre: 'iPad', precio:600},
    { nombre: 'Teclado', precio:100},
    { nombre: 'procesador i7', precio:700}
]

for( let i = 0; i < carrito.length; i++) {
    console.log(` producto: ${carrito[i].nombre} - precio: ${carrito[i].precio}`);
}