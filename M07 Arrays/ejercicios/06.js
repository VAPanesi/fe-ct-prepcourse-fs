function duplicarElementos(array) {
  // Duplica (multiplica x2) cada elemento del array de números.
  // Devuelve un array con los duplicados.
  // Tu código:
for (i = 0 ; i < array.length ; i++) {
  var duplicado = 2
  console.log(duplicado *= array[i]);
}
}

console.log(duplicarElementos([2, 3, 4]));
module.exports = duplicarElementos;
