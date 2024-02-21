function contarElementosMayoresA10(array) {
  // Cuenta y devuelve la cantidad de elementos mayores a 10 en el array de números.
  // Tu código:
  var contador = 0;
  for (let i=0 ; i<array.length ; i++) {
    if (array[i] > 10) {
      contador ++; // esto es igual que "contador = contador + 1" 
    }              // sirve cuando se necesita CONTAR elementos
  }
  if (array.length === 0) {
    return 0;
  } else {
    return contador;
  }
}
console.log(contarElementosMayoresA10([1, 4, 6, 20, 30, 50]));
console.log(contarElementosMayoresA10([]));
module.exports = contarElementosMayoresA10;
