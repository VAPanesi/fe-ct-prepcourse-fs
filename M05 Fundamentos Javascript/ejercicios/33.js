function esNumeroPrimo(numero) {
  // La función recibe un argumento "numero".
  // Determina si este corresponde a un número primo.
  // De ser así, retorna true.
  // De lo contrario, retorna false.
  // IMPORTANTE: Recuerda que un número primo es aquel que
  // solo es divisible por sí mismo y por 1.
  // Tu código:
  if (numero <= 1) {
    return false;
  }

  for (i=2 ; i <= Math.floor(numero / 2); i++) {
    if (numero % i === 0) {
      return false;
    }
  }
  return true;
}

console.log(esNumeroPrimo(16));
module.exports = esNumeroPrimo;
