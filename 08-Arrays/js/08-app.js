const producto = {
    nombre:'Monitor 27 pulgadas',
    precio:300,
    disponible:true
}

//const nombre = producto.nombre;
//console.log(nombre);

//Destructuring
const {nombre, precio,disponible} = producto;


//destructuring con arrays
const numeros = [10,20,30,40,50,60];
const [primero,,tercero,,,sexto] = numeros;

console.log(tercero);
console.log(primero);
console.log(sexto);


const [,,,...tres] = numeros;
console.log(tres); //40,50,60