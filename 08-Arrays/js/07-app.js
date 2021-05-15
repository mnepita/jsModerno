/* Eliminar elementos de un arreglo */
const carrito =[];

const monitor = {
    nombre: 'Monitor 27',
    precio: 200
}

const celular = {
    nombre: 'celular',
    precio:700
}

carrito.push(monitor);
console.log(carrito);

carrito.unshift(celular); //coloca el elemento en la primera posicion
console.log(carrito);

//eliminar el ultimo elemento del arreglo
carrito.pop();
console.table(carrito);


//Eliminar al inicio del arreglo
//carrito.shift();

//eliminar posiciones especificas
//carrito.splice(1,3);

