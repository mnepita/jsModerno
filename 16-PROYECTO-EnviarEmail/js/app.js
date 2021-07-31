// variables
const btnSend = document.querySelector('#enviar');
const form = document.querySelector('#enviar-mail');

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
    e.target.classList.add('border', 'border-red-500');
    showError('Todos los campos son obligatorios');
  }

  if(e.target.type === 'email') {
    const result = e.target.value.indexOf('@');
    console.log(result);

    if(result < 0) {
      console.log('error en email');
      showError('email invalido');
    }

  }

}

function showError(message) {
  const errorMessages = document.createElement('p');
  errorMessages.textContent = message;
  errorMessages.classList.add('border', 'border-red-500', 'background-red-100', 'text-red-500', 'p-3', 'mt-5', 'text-center', 'error');

  const errors = document.querySelectorAll('.error');
  if(errors.length === 0) {
    form.appendChild(errorMessages);
  }
}
