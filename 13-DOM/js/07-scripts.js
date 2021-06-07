//Como cambiar CSS con JS o quitar classes

//cambiar de color encabezado a rojo
const encabezado = document.querySelector('h1');
encabezado.style.backgroundColor = 'red';

//cam,biar fuente a times
encabezado.style.fontFamily = 'times';

//agregar o quitar clases
const card = document.querySelector('.card');
card.classList.add('nueva-clase', 'otra-clase');
card.classList.remove('nueva-clase');
console.log(card);


