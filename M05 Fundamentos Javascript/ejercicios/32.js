function deEuroAdolar(euro) {
  // Debes calcular el valor recibido como argumento pasándolo a dólares.
  // Supongamos que 1 euro equivale a 1.20 dólares.
  // Tu código:
  var conversion = 1.20;
  var dolar = conversion * euro;
  return dolar;
}
console.log(deEuroAdolar(1));
module.exports = deEuroAdolar;
