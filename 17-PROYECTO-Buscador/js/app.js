const result = document.querySelector('#resultado');
const marca = document.querySelector('#marca');
const carYear = document.querySelector('#year');
const min = document.querySelector('#minimo');
const max = document.querySelector('#maximo');
const transmision = document.querySelector('#transmision');
const colour = document.querySelector('#colour');
const maxYear = new Date().getFullYear();
const minYear = maxYear - 10;
const searchData = {
  marca:'',
  year:'',
  min: '',
  max:'',
  puertas: '',
  transmision:'',
  colour:''

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
    searchData.min = e.target.value;
    carFilter();
  });

  maximo.addEventListener('change', e => {
    searchData.max= e.target.value;
    carFilter();
  });

  puertas.addEventListener('change', e => {
    searchData.puertas = parseInt(e.target.value);
    carFilter();
  });

  transmision.addEventListener('change', e => {
    searchData.transmision = e.target.value;
    carFilter();
  });

  colour.addEventListener('change', e => {
    searchData.colour = e.target.value;
    carFilter();
  });
});


// functions
function showCars(autos) {
  clearHTML();

  autos.forEach(car => {
    const { marca, modelo, year, precio, puertas, transmision, colour } = car;
    const carHTML = document.createElement('p');
    carHTML.textContent = `
    ${marca} ${modelo} - ${year} - ${puertas} Puertas - Transmision: ${transmision} - Precio:${precio} - Colour: ${colour}
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
  clearHTML();
  const resultado = autos.filter( filtrarMarca ).filter( filtrarYear ).filter(filtrarMinimo).filter(filtrarMaximo).filter(filtrarPuertas).filter(filtrarTransmision).filter(filterByColour);
  if(resultado.length){
    console.log(resultado);
    showCars(resultado);
  } else {
    const noResultado = document.createElement( 'div' );
    noResultado.classList.add('alerta', 'error');
    noResultado.textContent = 'No hay resultados para la busqueda'
    result.appendChild(noResultado);
  }
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

function filtrarMinimo(auto ) {
  const {min} = searchData;
  if(min){
    return auto.precio >= min;
  }
  return auto;
}

function filtrarMaximo(auto ) {
  const {max} = searchData;
  if(max){
    return auto.precio <= max;
  }
  return auto;
}


function filtrarPuertas(auto ) {
  const {puertas} = searchData;
  if(puertas){
    return auto.puertas === puertas;
  }
  return auto;
}

function filtrarTransmision(auto) {
  const {transmision} = searchData;
  if(transmision){
    return auto.transmision === transmision;
  }
  return auto;
}


function filterByColour(auto){
  const {colour} = searchData;
  if(colour){
    return auto.colour === colour;
  }
  return auto;
}

