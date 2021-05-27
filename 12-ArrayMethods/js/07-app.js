// .contact => como unir arreglos

const meses = ['Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio'];
const meses2 = ['Agosto', 'Septiembre'];
const meses3 = ['Octubre'];

const resultado = meses.concat(meses2, meses3);
console.log(resultado);


// spread operator
const resultado2 = [...meses2, ...meses3];
console.log(resultado2);