// eventos con el scroll del mouse
window.addEventListener("scroll", (e) => {
  const scrollPX = window.scrollY;
  console.log(scrollPX);
});


//saber en que lugar esta en elemento en la pantalla de
window.addEventListener("scroll", () => {
  const premium = document.querySelector(".premium");
  const ubicacion = premium.getBoundingClientRect();

  if(ubicacion.top < 784) {
    console.log('el elemente es visible');
  } else {
    console.log('aun no esta visible');
  }
});