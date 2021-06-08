const busqueda = document.querySelector('.busqueda');
console.log(busqueda);

// busqueda.addEventListener('input', (e) => {
//   const input = e.target.value;
//   console.log(input);

// })

busqueda.addEventListener('mouseout', (e) => {
  if(e.target.value === '') {
    console.log('fallo la validación');
  }
});