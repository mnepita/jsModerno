//como se comunican las funciones
iniciarApp();

function iniciarApp(){
    console.log(`iniciando app`);

    segundaFuncion()
}

function segundaFuncion(){
    console.log(`desde la segunda funcion`);

    usuarioAuntenticado(`starman`)
}

function usuarioAuntenticado(usuario) {
    console.log(`autenticando usuario...`);
    console.log(`usuario ${usuario} autenticado satisfactoriamente`);
}