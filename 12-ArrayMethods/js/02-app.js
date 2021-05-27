// FindIndex para encontar una posicion en un array

const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio'];

const carrito = [
    { nombre: 'Monitor 27 Pulgadas', precio: 500 },
    { nombre: 'Televisión', precio: 100 },
    { nombre: 'Tablet', precio: 200 },
    { nombre: 'Audifonos', precio: 300 },
    { nombre: 'Teclado', precio: 400 },
    { nombre: 'Celular', precio: 700 },
]

//utilizando forEach 
meses.forEach( (mes,index) => {

    if( mes === 'Abril' ){
        console.log( `encontrado en el ${index}` );
    } 
})

// Metodo findIndex - encontra el indice de abril

const indice = meses.findIndex( (mes)=> mes === 'Abril');
console.log(indice);

const indiceNotfound = meses.findIndex( (mes)=> mes === 'Diciembre');
console.log(indiceNotfound); //regresa -1


//Encontar un indice de un arreglo de objetos...
const indice2 = carrito.findIndex( (producto) => producto.precio === 100);
console.log(indice2);