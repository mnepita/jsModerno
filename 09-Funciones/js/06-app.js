//parametros por default

//si el parametro no esta presente se le puede colocar un valor por default

//funcion dinamica
function hi(nombre='Nombre', apellido='Apellido', edad = 0){
    console.log(`Hola ${nombre} ${apellido} de ${edad} años`)
}

hi(undefined,'Bowie', 100);