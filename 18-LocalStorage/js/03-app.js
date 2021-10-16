localStorage.removeItem('producto');

//actualizar registro
const mesesArray = JSON.parse(localStorage.getItem('meses'));
console.log(mesesArray);
mesesArray.push('nuevo mes');
console.log(mesesArray);

localStorage.setItem('meses', JSON.stringify(mesesArray));
const mesesLS = JSON.parse(localStorage.getItem('meses'));
console.log(mesesLS);

localStorage.clear();