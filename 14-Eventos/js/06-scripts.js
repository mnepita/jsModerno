//event bubbling
const cardDiv = document.querySelector('.card');
const infoDiv = document.querySelector('.info');
const titulo = document.querySelector('.titulo');

cardDiv.addEventListener('click', e => {
  e.stopPropagation();
  console.log('click sobre card');

});

infoDiv.addEventListener('click', e => {
  e.stopPropagation();
  console.log('click sobre info');
});

titulo.addEventListener('click', e => {
  e.stopPropagation();
  console.log('click sobre titulo');
});