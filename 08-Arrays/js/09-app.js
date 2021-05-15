const carrito = [
    { nombre: 'Monitor 27', precio:500},
    { nombre: 'Celular', precio:800},
    { nombre: 'iPad', precio:600},
    { nombre: 'Teclado', precio:100},
    { nombre: 'procesador i7', precio:700}
]


/*Metodos para iterar un arreglo o array methods*/

//For Loop
for(let i = 0; i < carrito.length; i++) {
    console.log(`${carrito[i].nombre} - Producto ${carrito[i].precio} - Precio`);
}

//forEach
carrito.forEach(producto => {
    console.log(producto); 
});