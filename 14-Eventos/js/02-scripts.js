//eventos que ocurren con el mouse
const nav = document.querySelector('.navegacion');

//registrar un eventos
nav.addEventListener('click', () => {
  console.log('click en el nav');
})

//mouse Enter
nav.addEventListener('mouseenter', () => {
  console.log('entrando al nav');
  nav.style.backgroundColor = 'white';

})

//mouseOut
nav.addEventListener('mouseout', () => {
  console.log('saliendo del nav');
  nav.style.backgroundColor = 'transparent';
})

//mouseDown
nav.addEventListener('mousedown', () => {
  console.log('presionando el nav');
  nav.style.backgroundColor = 'red';
})
