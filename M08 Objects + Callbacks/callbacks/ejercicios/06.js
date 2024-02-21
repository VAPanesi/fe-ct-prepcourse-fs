function map(array, cb) {
  // Itera sobre el arreglo y por cada elemento, pasárselo como argumento al callback.
  // Tiene que guardar el resultado devuelto por el callback en cada elemento dentro de un nuevo arreglo.
  // Retorna el nuevo arreglo.
  // Tu código:
  var nuevoArray = [];
  for (let i=0 ; i<array.length ; i++) {
    var callback = cb(array[i]);
    nuevoArray.push(callback);
  }
return nuevoArray;
}

var miArray = [1, 2, 3, 4, 5];
function multiplicacion(elemento) {
  return elemento * elemento;
}
const nuevoArray = map(miArray, multiplicacion);
console.log(nuevoArray);

module.exports = map;
