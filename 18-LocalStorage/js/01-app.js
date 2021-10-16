localStorage.setItem("name", "Martin Con local storage");
sessionStorage.setItem("name", "Martin Con session Storage");

const producto = {
  nombre: "monitor 27",
  precio: 900
}

const productoString = JSON.stringify(producto);

//PARA GUARDAR OBJECTO LO CONVIERTO al igual con los arreglos
localStorage.setItem("producto", productoString);

const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio'];
const MesesString = JSON.stringify(meses);
localStorage.setItem("meses", MesesString);