let personaje = {

    nombre: 'Taylor Swift',
    codeName: 'Woodvale',
    vivo: false,
    edad: 32,
    trajes: [ 'Mark I', 'Mark V', 'Hulkbuster' ],
    direccion: {
        zip: '10880, 90265',
        ubicacion: 'Malibu, California',
    },
    ultimaPelicula: 'Infinity War',

}; 

console.log('Nombre:', personaje.nombre);
console.log('Nombre:', personaje['nombre']);

console.log( 'Edad :' ,personaje.edad);
console.log( 'Direccion', personaje.direccion.zip);

console.log( 'No.Trajes', personaje.trajes.length);
console.log( 'Último traje:', personaje.trajes[personaje.trajes.length - 1]);

const x = 'vivo';
console.log( 'Vivo', personaje[x]);


console.log( 'Última Película', personaje['ultimaPelicula']);

// Más detalles

delete personaje.edad; //eliminar un elemento del objeto literal

personaje.casado = true; 


const entriesPares = Object.entries( personaje ); //obtener valor en pares
console.log(entriesPares);

Object.freeze(personaje); //nos permite congelar el objeto literal para que no se pueda meter mas propiedades.

personaje.dinero = 10000000000;                //no se coloca porque esta congelado
personaje.casado = false;
personaje.direccion.ubicacion = 'Costa Rica'; 

console.log(personaje);

const propiedades = Object.getOwnPropertyNames( personaje); //da los nombres de las propiedades del objeto literal
const valores = Object.values( personaje); //da los valorse del objeto literal
console.log({propiedades, valores});