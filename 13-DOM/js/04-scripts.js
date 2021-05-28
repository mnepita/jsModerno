//querySelector
// te permite incluso seleccionar clases

const card = document.querySelector('.card');
console.log(card);

//podemos tener selectores especificos como en CSS
const info = document.querySelector('.premium .info');
console.log(info);

//seleccionar el segundo card
const segundoCard = document.querySelector('section.hospedaje .card:nth-child(2)');
console.log(segundoCard);