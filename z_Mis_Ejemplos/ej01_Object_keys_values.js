/*
EXPLICACIÓN:

Consideremos un objeto como una un array de subarrays clave/valor.

Dado un objeto persona podemos obtener:

    - Un array con el nombre de sus propiedades..:    Object.keys(persona)
    - Un array con los valores de sus propiedades:    Object.values(persona)


 */


// Declarar el objeto 'persona'
const persona = {
    nombre: "Ana",
    edad: 30,
    anio_de_nacimiento: 1995 
};

/* Nota-1: Más abajo usaremos Object.entries(persona) que lo convierte en esto (array de subarrays):
        [
            ["nombre", "Ana"],
            ["edad", 30],
            ["año_de_nacimiento", 1995]
        ]
*/



function muestra_Propiedades(obj) {
    // Usar Object.keys() para obtener un array con los nombres de las propiedades
    const propiedades = Object.keys(obj);
    
    console.log("--- Propiedades del Objeto (del tirón) ---");
    console.log(propiedades); // Muestra el array de nombres de propiedades.
    
    // Mostrar propiedades:
    console.log("\nPropiedades del Objeto (forEach):");
    propiedades.forEach(prop => {
        console.log(`- ${prop}`);    // OJO: comillas invertidas para incluir el valor de la variable en el String.
    });
}


function muestra_Valores_Objeto(obj) {
    // Usar Object.values() para obtener un array con los valores de las propiedades
    const valores = Object.values(obj);
    
    console.log("\n--- Valores de las Propiedades del Objeto (del tirón) ---");
    console.log(valores); // Muestra el array de valores
    
    // Opcional: Mostrar cada valor en una línea separada
    console.log("\nValores (forEach):");
    valores.forEach(valor => {
        console.log(`> ${valor}`);
    });
}



/**
 * Muestra las parejas clave/valor de un objeto dado, usando Object.entries().
 * @param {Object} obj El objeto cuyas propiedades se quieren recorrer.
 */
function recorrerEntries(obj) {
    
    const array_de_Objeto = Object.entries(obj);  // Obtenemos el array de parejas [clave, valor]. Ver Nota-1 arriba.
    
    console.log("\n--- Recorriendo Parejas Clave/Valor con Object.entries() --- Forma 1 de 2:");
    
    // 2. Recorrer el array principal entries y mostrar la clave y el valor de cada par
    array_de_Objeto.forEach(entry => {
        // En el forEach, 'entry' es un array de dos elementos: [clave, valor]
        const clave = entry[0];
        const valor = entry[1];
        
        console.log(`Clave: ${clave}    |    Valor: ${valor}`);
    });
    
    // Opcional: Una forma más concisa con desestructuración de arrays
    /*
    */
    console.log("\n--- Recorriendo con Desestructuración (Forma Moderna) --- Forma 2 de 2");
    array_de_Objeto.forEach(([clave, valor]) => {
        console.log(`Clave: ${clave}    |    Valor: ${valor}`);
    });
    
}


// Llamar a las funciones con el objeto 'persona'
muestra_Propiedades(persona);
muestra_Valores_Objeto(persona);
recorrerEntries(persona);





