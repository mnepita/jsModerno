// variables
const result = document.querySelector('#resultado');
const carYear = document.querySelector('#year')
const maxYear = new Date().getFullYear();
const minYear = maxYear - 10;

//events
document.addEventListener('DOMContentLoaded', () => {
  showCars(); //show card on load

  // fill year selection
  showYearSelection();
});


// functions

function showCars() {
  autos.forEach(car => {
    const { marca, modelo, year, precio, puertas, transmision, color } = car;
    const carHTML = document.createElement('p');
    carHTML.textContent = `
    ${marca} ${modelo} - ${year} - ${puertas} Puertas - Transmision: ${transmision} - Precio:${precio} - Color: ${color}
    `;

    // insert on the html
    result.appendChild(carHTML);
  })

}
function showYearSelection() {
  // console.log('year selection loaded');
  for ( let i = maxYear; i >= minYear; i-- ) {
    console.log(i);
    const yearOption = document.createElement('option');
    yearOption.value = i;
    yearOption.textContent = i;
    carYear.appendChild(yearOption); //add year options
  }
}