function filter(arrayOfStrings) {
  // Debes identificar todos los elementos el arreglo que comiencen con la letra "a".
  // Luego retorna un nuevo arreglo con estos elementos.
  // Tu código:
  var arrayFiltrado = arrayOfStrings.filter(function (string){
    return string.startsWith("a")
  });
return arrayFiltrado;
}

console.log(filter(["banana", "cielo", "ana", "vaca", "amarillo", "azul"]));
module.exports = filter;
