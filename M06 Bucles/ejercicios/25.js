function esPalindromo(string) {
  // La función recibe un argumento "string".
  // Verifica si este string es palíndromo o no.
  // Retorna true si lo es, caso contrario, retorna false.
  // IMPORTANTE: Un palíndromo es una palabra o frase
  // que se lee igual hacia adelante que hacia atrás.
  // Tu código:
  var stringSinEspacios = string.replace(/ /g, '').toLowerCase();
  var palabraAlReves = stringSinEspacios.split("").reverse().join("");
  console.log(stringSinEspacios);
  console.log(palabraAlReves);
    if (stringSinEspacios === palabraAlReves){
    return true;
  } else {
    return false;
  }
}

console.log(esPalindromo("hola todo bien"));
module.exports = esPalindromo;
