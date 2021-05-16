/* Declaracion de funcion (Function declaration)
- las funciones pueden ser reutilizables
*/
sum()
function sum(){
    console.log(2+2);
}



//function expression - expresion de la funcion
sum2();
const sum2 = function() {
    console.log(3+3);
}

//Uncaught ReferenceError: can't access lexical declaration 'sum2' before initialization



/*
JS se ejecuta en dos bloques, la primer vuelta escanea el documento y registra todas las funciones que vaya a crear. Hoisting

*/