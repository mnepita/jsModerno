//Parametros y Argumentos en Funciones

function suma(){
    console.log(2+2);
}

suma();


//funcion que toma parametros
function sumar(a,b){
    console.log(a+b);
}

//funcion con argumentos
sumar(2,4);
sumar(369,369);


//funcion dinamica
function hi(nombre, apellido, edad = 0){
    console.log(`Hola ${nombre} ${apellido} de ${edad} años`)
}

hi('David', 'Bowie', 100);