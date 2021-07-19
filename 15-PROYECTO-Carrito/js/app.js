/* Variables --------------------------------*/
const carrito = document.querySelector( '#carrito' );
const contenedorCarrito = document.querySelector( '#lista-carrito tbody' );
const vaciarCarritoBtn = document.querySelector( '#vaciar-carrito' );
const listaCursos = document.querySelector( '#lista-cursos' );
let cartItems = [];


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
  }
}

//read html to extract course info
function readCourseData( selectedCourse ) {
   const courseInfo = {
    image: selectedCourse.querySelector( 'img').src,
    title: selectedCourse.querySelector( '.info-card h4' ).textContent,
    price: selectedCourse.querySelector('.precio span').textContent,
    id: selectedCourse.querySelector('a').getAttribute('data-id'),
    quantity: 1
  }

  //add elements on the cartItems array to cart
  addToCart(courseInfo);
}

function addToCart(courseInfo) {
  cartItems = [...cartItems, courseInfo];
  htmlCartItems();
}

// renders cart items on HTML element based on the array
function htmlCartItems() {
  // clean html
  cleanHTML();

  // iterates cart to generate html
  cartItems.forEach(curso => {
    const row = document.createElement('tr');
    row.innerHTML =
    `
    <td>
      <img src="${curso.image}">
    </td>
    <td>
      ${curso.title}
    </td>
    <td>
      ${curso.price}
    </td>
     <td>
      ${curso.quantity}
    </td>
    `;
    // insert html to the cart list tbody
    contenedorCarrito.appendChild(row);
  });
}


// deletes tbody courses
function cleanHTML() {
  // // metodo lento
  // contenedorCarrito.innerHTML = '';

  while(contenedorCarrito.firstChild) {
    contenedorCarrito.removeChild(contenedorCarrito.firstChild);

  }
}