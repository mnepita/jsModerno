// eventos en forumularios
const formulario = document.querySelector('#formulario');

formulario.addEventListener('submit', validarFormulario);

function validarFormulario(e) {
  e.preventDefault(); //detener la accion por default

  console.log('buscando...');

  console.log(e.target.action);
  console.log(e.target.method);
  console.log(e);

}