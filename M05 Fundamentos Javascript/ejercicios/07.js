function esTipoDato(valor) {
  // La función recibe un argumento "valor".
  // Retorna el tipo de dato de este valor.
  // Por ejemplo: "string", "number", "boolean", "object", etc.
  // Tu código:
  return typeof valor;
}
console.log(esTipoDato("hola"));
console.log(esTipoDato(5));
console.log(esTipoDato(true));
module.exports = esTipoDato;