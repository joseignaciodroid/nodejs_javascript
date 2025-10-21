const data = require('./data');


function entryCalculator(entrants) {
  // Si no se pasa ningún argumento → devuelve 0
  // Si se pasa un objeto vacío → devuelve 0
  // Si se pasa un objeto con claves 'Adult', 'Child' y 'Senior', devuelve la suma de:
  //       Adult * 49.99 + Child * 20.99 + Senior * 24.99

  // Caso 1 y 2: sin argumento o vacío
  // !entrants --> Si no hay argumentos.
  // Object.keys(objeto) --> Devuelve un array con los nombres de sus propiedades.
  if (!entrants || Object.keys(entrants).length === 0) {
    return 0;
  }

  // Extraer valores de precios
  const { Adult: priceAdult, Senior: priceSenior, Child: priceChild } = data.prices;

  // Extraer cantidades (si faltan, asumir 0)
  const { Adult = 0, Senior = 0, Child = 0 } = entrants;

  // Calcular total
  const total = (Adult * priceAdult) + (Senior * priceSenior) + (Child * priceChild);

  // Devolver con dos decimales.
  return Number(total.toFixed(2));

}


function schedule(dayName) {
  // your code here
}

function animalCount(species) {
  // your code here
}

function animalMap(options) {
  // your code here
}

function animalPopularity(rating) {
  // your code here
}



function animalsByIds(ids) {
  /*
    Recibe..:  uno o varios IDs de animales (Strings en formato UUID).
    Devuelve:  Un array que contiene los objetos de animales que corresponden
               con los IDs recibidos.
               - Si no se recibe ningún ID o si se recibe un array vacío se retornará un array vacío [].
               - Si un ID recibido no se encuentra en data.animals, será ignorado.
    Ejecutar con: npx mocha f_zoo --grep "animalsByIds"
  */

  // Manejo de caso vacío (retorna [] si 'ids' es null, undefined, o un array vacío)
    if (!ids || ids.length === 0) {
      return [];
    }
    
    // Lógica compactada: 
    // 1. Usa el operador ternario para asegurar que 'ids' es un array.
    // 2. Filtra 'data.animals' para incluir solo aquellos cuyo ID está en la lista de IDs.
    return data.animals.filter(animal => 
      (Array.isArray(ids) ? ids : [ids]).includes(animal.id)
    );  

}  // fin de animalsByIds






function animalByName(animalName) {
    /*
      Recibe: El nombre de un animal (string) o nada (undefined).
      Devuelve:
              - Devuelve el objeto animal completo del nombre recibido
                pero con una nueva propiedad añadida: species con el nombre de la especie.
              - Si el nombre no se encuentra o no se recibe ningún parámetro
                se retornará un objeto vacío {}.
      Comando de ejecución: npx mocha f_zoo --grep "animalByName"
    */


    // 1. Caso base: Si no se pasa el nombre, retorna el objeto vacío requerido.
  if (!animalName) {
    return {};
  }
  
  let foundResident = null;
  let foundSpecies = null;

  // 2. Iterar sobre CADA animal en los datos del zoo.
  data.animals.forEach(animal => {
      // 3. Buscar un residente con el nombre dado DENTRO de la lista de residentes de ese animal.
      const resident = animal.residents.find(resident => resident.name === animalName);
      
      // 4. Si se encuentra un residente, almacenar sus datos y el nombre de la especie.
      if (resident) {
        foundResident = resident;
        foundSpecies = animal.name; // 'lions', 'giraffes', etc.
      }
  });  // cierre del forEach.

  // 5. Devolver el objeto final.
  if (foundResident) {
    // Si se encontró, devuelve el objeto residente más la clave 'species'
    return {
      ...foundResident,
      species: foundSpecies,
    };
  }

  // Si no se encontró ningún residente, retorna el objeto vacío, cumpliendo con el test 1.
  return {};
}



function employeesByIds(ids) {
    /*
      Recibe. : uno o varios IDs.
      Devuelve: Un array con el objeto empleado correspondiente a cada id recibido encontrado.
      Comando.: npx mocha f_zoo --grep "employeesByIds"
    */

      // 1. Caso base: Si no se proporciona 'ids' o es un array vacío, retorna [].
      if (!ids || (Array.isArray(ids) && ids.length === 0)) {
        return [];
      }
      
      // 2. Lógica de Filtrado Concisa:
      //    - Asegura que `ids` es un array, incluso si se pasó un solo string.
      //    - Filtra data.employees, retornando solo aquellos cuyo 'id' está en la lista de IDs.
      return data.employees.filter(employee => 
        (Array.isArray(ids) ? ids : [ids]).includes(employee.id)
      );
}




function employeeByName(employeeName) {
  // your code here
}

function managersForEmployee(idOrName) {
  // your code here
}

function employeeCoverage(idOrName) {
  // your code here
}

module.exports = {
  entryCalculator,
  schedule,
  animalCount,
  animalMap,
  animalPopularity,
  animalsByIds,
  animalByName,
  employeesByIds,
  employeeByName,
  managersForEmployee,
  employeeCoverage
};
