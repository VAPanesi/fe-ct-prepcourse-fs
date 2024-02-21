function sumarArray(arrayOfNumbers, cb) {
  // Recibes un arreglo de números y un callback.
  // Suma todos los números del arreglo.
  // Este resultado debes pasárselo como argumento al callback recibido.
  // NOTA: no debes retOrnar nada.
  // Tu código:
  var resultado = 0
  for (let i=0 ; i<arrayOfNumbers.length ; i++) {
    resultado += arrayOfNumbers[i];
  }
cb(resultado);
}

var miArray = [1, 2, 3, 4, 5];
function cb(suma) {
  console.log(suma)
}
sumarArray(miArray, cb);
module.exports = sumarArray;
