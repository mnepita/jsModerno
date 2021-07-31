// variables
const regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

const btnSend = document.querySelector('#enviar');
const btnReset = document.querySelector('#resetBtn');
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

  // resets the form
  btnReset.addEventListener('click', resetForm);

  // enviar email
  form.addEventListener('submit', sendEmail);

}

// funciones
function startApp() {
  btnSend.disabled = true;
  btnSend.classList.add('cursor-not-allowed', 'opacity-50');
}

// validate form
function validateForm(e) {

  if(e.target.value.length > 0) {
    // clear errors
    const error = document.querySelector('p.error');
    if(error) {
      error.remove();
    }

    // console.log('no esta vacio');
    e.target.classList.remove('border-red-500');
    e.target.classList.add('border', 'border-green-500');
  } else {
     e.target.classList.remove('border', 'border-green-500');
    e.target.classList.add('border', 'border-red-500');
    showError('All fields required');
  }

  if(e.target.type === 'email') {
    // const result = e.target.value.indexOf('@');
    // validate with a regular expression
    if(regex.test( e.target.value )) {
      const error = document.querySelector('p.error');
      if(error) {
        error.remove();
      }
      // console.log('no esta vacio');
      e.target.classList.remove('border-red-500');
      e.target.classList.add('border', 'border-green-500');
    } else {
      e.target.classList.remove('border', 'border-green-500');
      e.target.classList.add('border', 'border-red-500');
      showError('Enter a valid email');
    }
  }

  if(regex.test( email.value ) && asunto.value !== '' && mensaje.value !== '' ) {
    console.log('validation clear');
    btnSend.disabled = false;
    btnSend.classList.remove('cursor-not-allowed', 'opacity-50');
  } else{
      btnEnviar.disabled=true;
      btnEnviar.classList.add('cursor-not-allowed','opacity-50')
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

// send email
function sendEmail(e) {
  e.preventDefault();
  // console.log('sending email...');
  const spinner = document.querySelector('#spinner');
  spinner.style.display = 'flex';

  // after 3 seconds hides the spinner and shows confirmation message
setTimeout( () => {
  console.log('fires after 3 seconds');
  spinner.style.display = 'none';
  // confirmation message
  const message = document.createElement('p');
  message.textContent = 'Email sent';
  message.classList.add('text-center', 'my-10','p-2', 'bg-green-500', 'text-white', 'font-bold', 'uppercase');

  form.insertBefore(message, spinner);

  setTimeout( () => {
    message.remove(); //clears confirmation message
    resetForm()
  }, 5000);

}, 3000 );

}

// clear form
function resetForm() {
  form.reset();
  startApp()
}
