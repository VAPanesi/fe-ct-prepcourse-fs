function encontrarElemento(elemento, array) {
  // Busca el elemento pasado por argumento dentro del array.
  // Si no se encuentra, retorna -1.
  // Tu código:
  var encontrarArray = array.indexOf(elemento);
  if (encontrarArray) {
    return 1;
  } else {
    return -1;
  }
    
  }

console.log(encontrarElemento(2, [1, 4, 3]));
module.exports = encontrarElemento;
