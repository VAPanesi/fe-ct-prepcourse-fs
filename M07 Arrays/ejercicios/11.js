function multiplicarElementosPorIndice(array) {
  // Multiplica cada elemento del array por su índice.
  // Devuelve el nuevo arreglo con los resultados.
  // Tu código:
  var nuevo = [];
  for (let i=0 ; i<array.length ; i++) {
    var producto = array[i] * i;
    nuevo.push(producto);
  }
return nuevo;
}
console.log(multiplicarElementosPorIndice([1, 2, 3, 4, 5]));
module.exports = multiplicarElementosPorIndice;
