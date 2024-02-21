function operacionMatematica(num1, num2, cb) {
  // En este ejercicio recibirás dos números y un callback.
  // El callback realiza una operación matemática, por lo que necesita de los dos números.
  // Retorna el resultado del callback pasándole por valores los números num1 y num2.
  // Tu código:
  return cb(num1, num2);
}

// Definir un callback que suma dos números
function suma(a, b) {
  return a + b;
}

// Llamar a la función operacionMatematica con los números 5 y 3 y la función suma
const resultado = operacionMatematica(5, 3, suma);

console.log(resultado);
module.exports = operacionMatematica;
