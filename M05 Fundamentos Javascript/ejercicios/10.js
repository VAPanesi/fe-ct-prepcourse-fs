function esFechaValida(fecha) {
  // La función recibe un argumento "fecha".
  // Comprueba si este corresponde a una fecha válida.
  // Si es así, retorna true, sino retorna false.
  // Tu código:
  if (fecha instanceof Date && !isNaN(fecha)) {
    return true;
  } else {
    return false;
  }
}
console.log(new Date("2023-11-21"));
module.exports = esFechaValida;