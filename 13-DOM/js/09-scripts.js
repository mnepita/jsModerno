//eliminar elementos del DOM
const primerEnlace = document.querySelector('a');
primerEnlace.remove(); //eliminar primer enlace
console.log(primerEnlace);

//eliminar desde el padre
const navegacion = document.querySelector('.navegacion');
console.log(navegacion.children);
navegacion.removeChild( navegacion.children[2] );//se le pasa la referencia del elemento a eliminar