/* Variables --------------------------------*/
const cart = document.querySelector( '#carrito' );
const contenedorCarrito = document.querySelector( '#lista-carrito tbody' );
const vaciarCarritoBtn = document.querySelector( '#vaciar-carrito' );
const listaCursos = document.querySelector( '#lista-cursos' );
let cartItems = [];


//courses event listener
loadEventListeners()
function loadEventListeners() {
  listaCursos.addEventListener( 'click', addCourse );

  // delete course from the cartItems
  cart.addEventListener('click', deleteCourse );

  // clear shopping cart
  vaciarCarritoBtn.addEventListener( 'click', () => {
    cartItems = [];
    htmlCartItems();
  });
}

/* Functions --------------------------------*/
function addCourse( e ) {
  e.preventDefault();

  if( e.target.classList.contains( 'agregar-carrito' ) ) {
    const selectedCourse = e.target.parentElement.parentElement;
    readCourseData(selectedCourse )
  }
}

// deletes course from the cart
function deleteCourse ( e ) {
  if( e.target.classList.contains('borrar-curso')) {
    const courseId = e.target.getAttribute('data-id');
    // deletes from the array
    cartItems = cartItems.filter(course => course.id !== courseId);
    htmlCartItems();
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

  // check if the course already exists on the cart
  const courseExists = cartItems.some( course => course.id === courseInfo.id);
  console.log(courseExists);
  if(courseExists) {
    // updates quantity
    const courses = cartItems.map(course => {
      if(course.id === courseInfo.id) {
        course.quantity++;
        return course;
      } else {
        return course;
      }
    });
    cartItems = [...courses];


  } else {
    addToCart(courseInfo);
  }
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
    const {image, title, price, quantity, id} = curso;

    const row = document.createElement('tr');
    row.innerHTML =
    `
    <td><img src="${image}"></td>
    <td>${title}</td>
    <td>${price}</td>
    <td>${quantity}</td>
    <td> <a href="#" class="borrar-curso" data-id="${id}"> X </a></td>
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