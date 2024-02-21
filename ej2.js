function numeroSimetrico(num) {
    // La funcion llamada 'numeroSimetrico' recibe como argumento un numero entero 'num'
    // Esta devuelve true o false dependiendo de si el número es simétrico o no. 
    // Un número es simétrico cuando es igual a su reverso.
    // Ej:
    // numeroSimetrico(11711) devuelve true
  
    // Tu código:
    var numeroString = num.toString();
    var conversion = numeroString.split("").reverse().join("");
    if (numeroString === conversion) {
    return true;
    } else {
    return false;
    }
  }
  console.log(numeroSimetrico(11241));