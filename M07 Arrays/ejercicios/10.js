function encontrarIndiceMayor(array) {
  // Encuentra el índice del número más grande en el array de números.
  // Devuelve el valor de este índice.
  // Tu código:
  var indice = 0;
  for(let i=0 ; i<array.length ; i++) {
    if (array[i] > array[indice]) {
      indice = i;
    }
  }
  return indice;
}

console.log(encontrarIndiceMayor([1, 2, 3, 4, 5, 6]));
module.exports = encontrarIndiceMayor;
