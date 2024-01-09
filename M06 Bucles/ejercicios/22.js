function diasEnMes(mes) {
  // La función recibe un mes(número) por argumento.
  // Determine cúantos días tiene el mes correspondiente a ese número.
  // PISTA: Usa un bucle do-while para validar que el mes ingresado sea válido.
  // Tu código:
  var nuevoMes = new Date(2022, mes, 0);
  var ultimoDiaMes = nuevoMes.getDate();
  if (mes >= 1 && mes <= 12) {
  return ultimoDiaMes;
  } else {
    return 0;
  } 
}
console.log(diasEnMes(13));
module.exports = diasEnMes;