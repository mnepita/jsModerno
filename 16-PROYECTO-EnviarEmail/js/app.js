// variables
const btnSend = document.querySelector('#enviar');

// variables para inputs
const email = document.querySelector('#email');
const asunto = document.querySelector('#asunto');
const mensaje = document.querySelector('#mensaje');

// eventListeners
eventListeners();
function eventListeners() {
  // cuando el app arranca
  document.addEventListener('DOMContentLoaded', startApp);

  // campos del formulario
  email.addEventListener('blur', validateForm);
  asunto.addEventListener('blur', validateForm);
  mensaje.addEventListener('blur', validateForm);

}

// funciones
function startApp() {
  btnSend.disable = true;
  btnSend.classList.add('cursor-not-allowed', 'opacity-50');
}

// validate form
function validateForm(e) {
  if(e.target.value.length > 0) {
    console.log('no esta vacio');
  } else {
    e.target.classList.add('border-red-500');
    alert('todos los campos requeridos');
  }
}