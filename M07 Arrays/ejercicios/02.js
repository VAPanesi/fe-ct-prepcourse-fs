function ordenarArray(array) {
  // Ordena los elementos del areglo array de menor a mayor.
  // Devuelve el arreglo resultante.
  // Tu código:
  //var arrayOrdenado = array.sort((a, b) => a - b);
  for (let i=0 ; i<array.length ; i++) {
    if (isNaN(array[i])){
      return array.sort();
    } else if (!isNaN(array[i])){
      return array.sort((a, b) => a - b);
    }
  }
  if (array.length === 0) {
    return array;
  }
}

console.log(ordenarArray([]));
console.log(ordenarArray(["hola", "banana", "cielo", "madre"]));
module.exports = ordenarArray;
