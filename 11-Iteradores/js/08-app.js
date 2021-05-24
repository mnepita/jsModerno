//for in -- permite iterar objetos

const auto = {
    year: 1970,
    model: 'Camaro',
    motor:'6.0'
}

for (let propiedad in auto ) {
    console.log(`${auto[propiedad]}`);
}

for ( let [key, value] of Object.entries(auto)) {
    console.log(key, value);
}