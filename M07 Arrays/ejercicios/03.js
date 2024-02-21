function encontrarElemento(elemento, array) {
  // Busca el elemento pasado por argumento dentro del array.
  // Si no se encuentra, retorna -1.
  // Tu código:
    return array.indexOf(elemento);
  }

console.log(encontrarElemento(3, [1, 43, 7, 5, 9, 3, 67, 88]));
module.exports = encontrarElemento;

//EJ  var numeros = [23, 24, 25, 26];
//    var encontrarIndice = numeros.indexOf(24);
//    console.log(encontrarIndice); ==> la rta será "2", ya que el 24 se encuentra en el
//    indice 2.

//   cuando no encuentra el valor, por defecto da -1.
// en el caso que todos los elementos del array sean iguales, dará 0, ya que si tenemos
// console.log(encontrarElemento(3, [3, 3, 3])); el primer indice q agarra es 0.