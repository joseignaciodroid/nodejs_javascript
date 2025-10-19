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
  // your code here
}

function animalByName(animalName) {
  // your code here
}

function employeesByIds(ids) {
  // your code here
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
