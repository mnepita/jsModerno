//obtener datos de local storage

const nombre = localStorage.getItem("name");
const productolS = localStorage.getItem("producto");
const mesesLS = localStorage.getItem("meses");

console.log(nombre);
console.log(productolS);
console.log(mesesLS);

//convertir a objecto y arreglo
const productoJSON = JSON.parse(localStorage.getItem("producto"));
console.log(productoJSON);


const mesesJSON = JSON.parse(localStorage.getItem("meses"));
console.log(mesesJSON);