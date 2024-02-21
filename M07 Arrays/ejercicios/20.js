function contarParesConContinue(numeros) {
  // La función recibe un array de numeros por argumento.
  // Devuelve la cantidad de números pares que hay en el array.
  // Evita los impares utilizando continue.
  // Tu código:
  var contador = 0;
  for (let i=0 ; i<numeros.length ; i++) {
    if (numeros[i] % 2 !== 0) {
      continue;
    }
    contador = contador + 1;
  }
return contador;
}

console.log(contarParesConContinue([1, 2, 3, 4, 5, 6, 8, 10, 11]));
module.exports = contarParesConContinue;
