function esMayorDeEdad(fechaNacimiento) {
  // La función recibe un argumento "fechaNacimiento" correspondiente a la fecha
  // de nacimiento de una persona.
  // Determina si esta persona es mayor de edad (tiene 18 años o más).
  // Devuelve true si lo es, caso contrario, retorna false.
  // PISTA: Investiga el método getFullYear() de la clase Date para obtener el año actual.
  // Tu código:
  var fechaNacimiento = new Date(fechaNacimiento);
  var fechaActual = new Date();
  var diferenciaEnAnios = fechaActual.getFullYear() - fechaNacimiento.getFullYear();

  if (diferenciaEnAnios >= 18) {
    return true;
  } else {
    return false;
  }
}

console.log(esMayorDeEdad("2000-05-28"));
module.exports = esMayorDeEdad;