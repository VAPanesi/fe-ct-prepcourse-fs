function obtenerElementoAleatorio(array) {
  // Devuelve un elemento aleatorio del arreglo array.
  // PISTA: Usa el método Math.random().
  // Tu código:
  var elementoRandom = Math.random(array);
  return elementoRandom;
}

console.log(obtenerElementoAleatorio(["sur", "este", "oeste", "norte"]));
module.exports = obtenerElementoAleatorio;
