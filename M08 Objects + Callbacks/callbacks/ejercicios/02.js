function cambiarCadena(string, callback) {
  // Aplica la función de callback al string y devuelve el resultado.
  // La función de callback se encargará de recibir el string y devolverlo con los cambios.
  // Tu código:
  return callback(string);
}

// Define una función de callback que convierte el string a mayúsculas
function convertirAMayusculas(str) {
return str.toUpperCase();
}

// Prueba la función cambiarCadena con el string "Hola, mundo!" y la función de callback convertirAMayusculas
const resultado = cambiarCadena("hola", convertirAMayusculas);
console.log(resultado);
module.exports = cambiarCadena;
