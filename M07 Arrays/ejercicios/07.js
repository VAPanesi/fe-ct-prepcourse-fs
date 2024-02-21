function convertirStringAMayusculas(array) {
  // Convierte a mayúsculas todos los strings del array.
  // Retorna el arreglo resultante.
  // Tu código:
  var nuevo = [];
  for (let i=0 ; i<array.length ; i++) {
    var mayuscula = array[i].toUpperCase();
    nuevo.push(mayuscula);
  }
  return nuevo;
}

console.log(convertirStringAMayusculas(["hola", "todo", "bien"]));
module.exports = convertirStringAMayusculas;
