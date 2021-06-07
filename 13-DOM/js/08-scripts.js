// //Traversing the DOM - recorriendo el dom
// const navegacion = document.querySelector('.navegacion');
// console.log(navegacion);
// console.log(navegacion.childNodes);// los espacios en blanco son considerados elementos

//navegacion.firstElementChild
//navegacion.lastElementChild

// //otra opcion mas limpia es usar .children -> ver mozillaDeve
// console.log(navegacion.children);//lista elementos reales en vez de nodos

//navegar sobre los hijos de los elementos se le conoce como traversing the dom

const card = document.querySelector('.card');
// // console.log(card.children);
// console.log(card.children[1].children[1].textContent = 'Heading desde traversing the DOM');

//cambiar el src de una imagen
card.children[0].src = 'img/hacer3.jpg';

//traversing al padre
console.log(card.parentNode);
console.log(card.parentElement);//puedes anidar tantos parentElement como quieras

//nextElementSibling selecciona el siguiente elemento hermano
//previousElementSibling seleccion el anterior
//:nth-child(x) especifica el elemento que buscas
