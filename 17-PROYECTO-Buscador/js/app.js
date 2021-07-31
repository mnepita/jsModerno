// variables
const result = document.querySelector('#resultado');

//events
document.addEventListener('DOMContentLoaded', ()=>{
  showCars();
});


// functions

function showCars() {
  autos.forEach(car => {
    const {marca, modelo, year, precio, puertas, transmision, color} = car;
    const carHTML = document.createElement('p');
    carHTML.textContent = `
    ${marca} ${modelo} - ${year} - ${puertas} Puertas - Transmision: ${transmision} - Precio:${precio} - Color: ${color}
    `;

    // insert on the html
    result.appendChild(carHTML);
  })

}