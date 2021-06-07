const btnFlotante = document.querySelector('.btn-flotante');
const textoBtn = btnFlotante.textContent;
const textoBtnCerrar = 'cerrar X';
const footer = document.querySelector('.footer');

//agegar event listener
btnFlotante.addEventListener('click', showHide);

function showHide() {
  if (footer.classList.contains('activo')) {
    footer.classList.remove('activo');
    btnFlotante.classList.remove('activo');
    btnFlotante.textContent = textoBtn;
  } else {
    footer.classList.add('activo');
    btnFlotante.classList.add('activo');
    btnFlotante.textContent = textoBtnCerrar;
  }

}


