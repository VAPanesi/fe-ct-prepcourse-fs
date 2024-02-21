function todosIguales(array) {
  // Si todos los elementos del arreglo son iguales, retornar true.
  // Caso contrario, retornar false.
  // Tu código:
return array.every(function(elemento) {
return elemento === array[0];
});
}
console.log(todosIguales([1, 1, 1, 1]));
module.exports = todosIguales;
