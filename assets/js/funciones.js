
function saludar (nombre) { //argumentos  //funcion tradicional
    console.log(arguments); //todos los elementos enviados a la funcion
    console.log(`Hola ${nombre}`);  //backticks
    return 1; //lo que retorna
}

const saludar2 = function(nombre) {   //función anónima
    console.log(`Hola ${nombre}`);
}

const saludarFlecha = () => { //funcion flecha
    console.log('Hola Flecha')
}

const saludarFlecha2 = (nombre) => { //funcion flecha con argumento
    console.log(`Hola ${nombre}`);
}

const retornoDeSaludar = saludar('Claudio', 40, true, 'Costa Rica');
console.log({retornoDeSaludar});

saludarFlecha('Claudio'); //argumento: Claudio
saludarFlecha2('Luciana'); //argumento: Luciana

