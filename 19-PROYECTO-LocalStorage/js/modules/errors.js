//mostar mensaje de error de
function showError(error) {
  const errorMessage = document.createElement('p');
  errorMessage.innerHTML = error;
  errorMessage.classList.add('error');

  const contenido = document.getElementById('contenido');
  contenido.appendChild(errorMessage);

  setTimeout(() => {
    errorMessage.remove();
  }, 1500);
}