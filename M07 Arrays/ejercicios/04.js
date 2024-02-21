function obtenerElementoAleatorio(array) {
  // Devuelve un elemento aleatorio del arreglo array.
  // PISTA: Usa el método Math.random().
  // Tu código:
  var indiceRandom = Math.floor(Math.random() * array.length);
  return array[indiceRandom];
}

console.log(obtenerElementoAleatorio([1, 2, 3, 4]));
module.exports = obtenerElementoAleatorio;

// pj: si array.length es 5, entonces Math.random() * array.length generará 
// un número decimal entre 0 (inclusive) y 5 (exclusivo). 
// Este número se puede redondear hacia abajo con Math.floor() para obtener un índice válido en el 
// rango de 0 a 4 (inclusive).
// Math.random(): Genera un número decimal pseudoaleatorio entre 0 (inclusive) y 1 (exclusivo).
// Math.random() * array.length: Multiplica el número aleatorio por la longitud del array, obteniendo 
// así un número entre 0 (inclusive) y la longitud del array (exclusivo).
// Math.floor(Math.random() * array.length): Utiliza Math.floor() para redondear hacia abajo y obtener un 
// número entero entre 0 y la longitud del array - 1.
// array[indiceAleatorio]: Accede al elemento del array en la posición dada por indiceAleatorio.