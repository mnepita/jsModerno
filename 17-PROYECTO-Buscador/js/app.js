// variables
const result = document.querySelector('#resultado');
const marca = document.querySelector('#marca');
const carYear = document.querySelector('#year');
const minimo = document.querySelector('#minimo');
const maximo = document.querySelector('#maximo');
const transmision = document.querySelector('#transmision');
const color = document.querySelector('#color');
const maxYear = new Date().getFullYear();
const minYear = maxYear - 10;
const searchData = {
  marca:'',
  year:'',
  min: '',
  max:'',
  puertas: '',
  transmision:'',
  color:''

}
//events
document.addEventListener('DOMContentLoaded', () => {
  showCars(autos); //show card on load

  // fill year selection
  showYearSelection();

  marca.addEventListener('change', e => {
    searchData.marca = e.target.value;
    carFilter();
  });

  carYear.addEventListener('change', e => {
    searchData.year = parseInt(e.target.value);
    carFilter();
  });

  minimo.addEventListener('change', e => {
    searchData.minimo = e.target.value;
  });

  maximo.addEventListener('change', e => {
    searchData.maximo = e.target.value;
  });

  transmision.addEventListener('change', e => {
    searchData.t = e.target.value;
  });

  color.addEventListener('change', e => {
    searchData.color = e.target.value;
  });

});


// functions

function showCars(autos) {
  clearHTML();

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

function clearHTML(){
  while (resultado.firstChild) {
    resultado.removeChild(resultado.firstChild);
  }
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

function carFilter() {
  const resultado = autos.filter( filtrarMarca ).filter( filtrarYear );
  console.log(resultado);
  showCars(resultado);
}

function filtrarMarca( auto ) {
  const {marca} = searchData;
  if(marca){
    return auto.marca === marca;
  }
  return auto;
}

function filtrarYear( auto ) {
  const {year} = searchData;
  if(year){
    return auto.year === year;
  }
  return auto;

}
