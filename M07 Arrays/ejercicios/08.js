function filtrarNumerosPares(array) {
  // Devuelve un arreglo solo con los números pares presentes en el array.
  // Tu código:
  var filtrado = array.filter(function(elemento) {
    return elemento % 2 === 0;
  });
return filtrado;
}
console.log(filtrarNumerosPares([1, 2, 3, 4, 5, 6, 7]));
module.exports = filtrarNumerosPares;
