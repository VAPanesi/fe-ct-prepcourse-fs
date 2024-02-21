function duplicarElementos(array) {
  // Duplica (multiplica x2) cada elemento del array de números.
  // Devuelve un array con los duplicados.
  // Tu código:
  var nuevo = [];
  for (let i=0 ; i<array.length ; i++) {
    var duplicado = array[i] * 2;
    nuevo.push(duplicado);
  }
return nuevo;
}

console.log(duplicarElementos([-2, -3, -4]));
module.exports = duplicarElementos;
