
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

/*
Rest y Spread Operator
forma declarativa donde la variable original no se modifica si no se crea una nueva
funciones declarativas, es un paradigma que expresa la logica sin describir el flujo de control
*/
let resultado;
resultado = [...carrito, producto];
console.table(resultado);

resultado = [...resultado, producto2];
console.table(resultado);

resultado = [producto2,...resultado];
console.table(resultado);