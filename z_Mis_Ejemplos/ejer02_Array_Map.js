/*
    la función array.map
    ====================
    - Tiene como argumento una función.
    - Devuelve siempre un array.

*/


const numeros = [1, 2, 3, 4];

function triple (numero){
    return numero * 3;
}

// Usando map con la función triple.
console.log( numeros.map(triple) );

// Hacemos lo mismo con una función flecha, o sea, una función sin nombre.
console.log( numeros.map(numero => numero * 3));




// ===================================================================

const personas = [
    {
        nombre: "Ana",
        edad: 30,
        anio_de_nacimiento: 1995 
    },
        {
        nombre: "Eva",
        edad: 10,
        anio_de_nacimiento: 2015 
    }
];

function obtenerNombre(persona){
    return persona.nombre;
}

// Usando la función definida obtenerNombre.
console.log(personas.map(obtenerNombre));

// Usando la función flecha.
console.log(personas.map(persona => persona.nombre));

// Ahora obtenemos un array con las edades, igual que arriba con función flecha.
edades = personas.map(persona => persona.edad)
console.log(edades);
console.log(edades.map(edad => edad + 1));  // Devuelve la edad + 1 [31 y 11]

// ahora lo mismo, pero encadenando los dos map de arriba:
console.log(personas.map(persona => persona.edad).map(edad => edad + 1));