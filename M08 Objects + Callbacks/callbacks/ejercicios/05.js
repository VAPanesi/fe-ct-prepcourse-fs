function forEach(array, cb) {
  // Recibes un arreglo y un callback.
  // Itera sobre el arreglo y por cada elemento iterado, ejecuta el callback con este valor.
  // Tu código:
  for (let i=0; i<array.length ; i++) {
    cb(array[i]);
  }
}

var miArray = [1, 2, 3, 4, 5];
function imprimirElemento(elemento) {
  console.log(elemento);
}

forEach(miArray, imprimirElemento);

module.exports = forEach;
