//Generar HTML desde JS
const enlace = document.createElement('a');

//agregando texto
enlace.textContent = '@Link'

//agregando href
enlace.href = 'http://www.mnepita.website';

//target
enlace.target = '_blank'

//agregar clase
enlace.classList.add('clase-nueva');

//agregar funcion al enlace -> dispara funcion al dar click
enlace.onclick = miFuncion;



//definir donde mostrar el enlace -
const navegacion = document.querySelector('.navegacion');
navegacion.appendChild(enlace); //appendChild lo coloca al final
navegacion.insertBefore(enlace, navegacion.children[1]); // toma dos argumentos, 1 element a insertar,  2 posicion


//function onClick
function miFuncion() {
  console.log('hola desde el click');
}

/* Creacion de un card */
//crear tres parrafos, agregar clases

const parrafo1 = document.createElement('p');
parrafo1.textContent = ' Concierto de Rock';
parrafo1.classList.add('categoria', 'concierto');

const parrafo2 = document.createElement('p');
parrafo2.textContent = 'Conciertos';
parrafo2.classList.add('titulo');

const parrafo3 = document.createElement('p');
parrafo3.textContent = '$800 por persona';
parrafo3.classList.add('precio');

//cread div con la clase de info
const info = document.createElement('div');
info.classList.add('info');

info.appendChild(parrafo1);
info.appendChild(parrafo2);
info.appendChild(parrafo3);

//crear la imagen de
const imagen = document.createElement('img');
imagen.src = 'img/hacer2.jpg';
imagen.alt = 'texto alternativo de img';

//crear el card
const card = document.createElement('div');
card.classList.add('card');
card.appendChild(imagen);
card.appendChild(info);

//contenedor de cards
const contendorCard = document.querySelector('.hacer .contenedor-cards');
// contendorCard.appendChild(card);
contendorCard.insertBefore(card, contendorCard.firstChild);
