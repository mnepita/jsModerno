/* Variables --------------------------------*/
const carrito = document.querySelector( '#carrito' );
const contenedorCarrito = document.querySelector( '#lista-carrito tbody' );
const vaciarCarritoBtn = document.querySelector( '#vaciar-carrito' );
const listaCursos = document.querySelector( '#lista-cursos' );


//courses event listener
loadEventListeners()
function loadEventListeners() {
  listaCursos.addEventListener( 'click', addCourse );
}


/* Functions --------------------------------*/
function addCourse( e ) {
  e.preventDefault();

  if( e.target.classList.contains( 'agregar-carrito' ) ) {
    const selectedCourse = e.target.parentElement.parentElement;
    readCourseData(selectedCourse )
    console.log( 'adding to cart' );
  }

}

//read html to extract course info
function readCourseData( selectedCourse ) {
  const courseInfo = {
    image: selectedCourse.querySelector( 'img').src,
    title: selectedCourse.querySelector( '.info-card h4' ).textContent
  }
  console.log( courseInfo );

}