function invertirTexto(texto) {
  // La función recibe un argumento "texto" que es un string.
  // Tu objetivo es invertir el string y devolver el string invertido.
  // Tu código:
  var textoSeparado = texto.split("");
  var textoInvertido = textoSeparado.reverse();
  var textoFinal = textoInvertido.join("");
    return textoFinal;
}
console.log(invertirTexto("La ruta nos aporto otro paso natural"));
module.exports = invertirTexto;