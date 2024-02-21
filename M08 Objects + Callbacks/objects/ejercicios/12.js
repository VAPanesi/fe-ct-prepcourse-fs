function multiplicarNumeroDesconocidoPorCinco(objetoMisterioso) {
  // El parámetro "objetoMisterioso" posee una propiedad con el nombre "numeroMisterioso".
  // Debes multiplicar este número por 5 y retornar el resultado.
  // Tu código:
  return objetoMisterioso.numeroMisterioso * 5;
}


var numero = {numeroMisterioso: 111}
var nuevo2 = {numeroMisterioso: 222}
console.log(multiplicarNumeroDesconocidoPorCinco(numero)); 
console.log(multiplicarNumeroDesconocidoPorCinco(nuevo2));

module.exports = multiplicarNumeroDesconocidoPorCinco;
