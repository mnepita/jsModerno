//funciones que retornan valores

// function sumar(a,b) {
//     return a +b ;
// }

// const resultado = sumar(4,2);
// console.log(resultado);

//ejemplo avanzado
let total = 0;
function agregarCarrito(precio){
    return total += precio;
}

function calcImpuesto(total){
    return total * 1.15;

}

total = agregarCarrito(400);
total = agregarCarrito(100);
total = agregarCarrito(500);

const totalPagar = calcImpuesto(total);
console.log(totalPagar);

console.log(total);