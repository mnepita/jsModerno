// Metodos en los arreglos
const meses = ["Octubre", "Noviembre", "Diciembre"];

meses.push("Junio");
console.log(meses);

meses.push('Julio')
console.log(meses);


//definir un producto y carrito de compras
const carrito =[];

const producto = {
    nombre: 'Monitor 27',
    precio: 200
}

const producto2 = {
    nombre: 'celular',
    precio:700
}

carrito.push(producto);
console.log(carrito);

carrito.unshift(producto2); //coloca el elemento en la primera posicion
console.log(carrito);