function tablaDelSeis() {
  // Devuelve un arreglo con los resultados de la tabla de multiplicar del 6 en orden creciente.
  // Desde 0 al 60.
  // Tu código:
  var nuevo = [];
  for(var i=0 ; i<=10 ; i++) {
  var producto = i * 6;
  nuevo.push(producto);
  }
return nuevo;
}
console.log(tablaDelSeis());
module.exports = tablaDelSeis;
