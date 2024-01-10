function ordenarArray(array) {
  // Ordena los elementos del areglo array de menor a mayor.
  // Devuelve el arreglo resultante.
  // Tu código:
  //var arrayOrdenado = array.sort((a, b) => a - b);
  if (array.sort((a, b) => a - b) || array.sort());
  return array;
}

console.log(ordenarArray([200, 5, 8, 46, 120]));
module.exports = ordenarArray;
