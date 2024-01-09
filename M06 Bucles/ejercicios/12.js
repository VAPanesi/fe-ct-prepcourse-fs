function fizzBuzz(num) {
  // Si "num" es divisible entre 3, retorna "fizz".
  // Si "num" es divisible entre 5, retorna "buzz".
  // Si "num" es divisible entre 3 y 5 (ambos), retorna "fizzbuzz".
  // De lo contrario, retorna false.
  // Tu código:
  var estado;

  switch(true) {
    case (num % 3===0 && num % 5===0):
    estado = "fizzbuzz"
    break;
    
    case num % 3===0:
    estado = "fizz"
    break;

    case num % 5===0:
    estado = "buzz"
    break;

    default:
    estado = false
  }
  return estado
}

console.log(fizzBuzz(15));
module.exports = fizzBuzz;
