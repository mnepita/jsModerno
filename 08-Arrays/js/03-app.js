//metodos y operaciones utiles de los arreglos

const meses = ['Enero','Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio'];
console.table(meses);


//cuanto mide el arreglo
console.log(meses.length);


//recorrer todo el arreglo con un for Loop (iterador)
for (let i = 0; i < meses.length; i++) {
   console.log(meses[i]);
}

//acceder a todos los elementos del arreglos - recorrer todos los elementos de un arreglo
meses.forEach(mes => {
    console.log(mes);
});