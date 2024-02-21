function encontrarElementoRepetido(numeros) {
  // La función recibe un argumento "numeros" que es un array de números.
  // Retorna el primer elemento repetido que se encuentre en el array.
  // Tu código:
  for (let i = 0; i < numeros.length; i++) {
    // Verificamos si el índice de la primera ocurrencia del elemento es diferente del índice actual
    if (numeros.indexOf(numeros[i]) !== i) {
      // Si es diferente, significa que es el primer elemento repetido y lo retornamos
      return numeros[i];
    }
  }

  // Si no se encuentra ningún elemento repetido, retornamos null
  return undefined;
}

const arrayEjemplo = [1, 2, 3, 4, 5, 2, 6];
const elementoRepetido = encontrarElementoRepetido(arrayEjemplo);
console.log(elementoRepetido); // Salida esperada: 2

module.exports = encontrarElementoRepetido;