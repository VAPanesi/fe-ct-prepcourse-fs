function obtenerPrimerStringLargo(array) {
  // Devuelve el primer string con más de 5 caracteres en el array.
  // Tu código:
  var nuevo = []
  for (let i=0 ; i<array.length ; i++) {
    if (array[i].length > 5) {
      return array[i];
    }
    nuevo.push(array[i]);
  }
  return nuevo;
}
console.log(obtenerPrimerStringLargo(["hola", "todo", "bien", "fideos", "manzana", "valentina"]));
console.log(obtenerPrimerStringLargo(["mama", "baño", "bebe", "banana", "baño", "francesca"]));
module.exports = obtenerPrimerStringLargo;


