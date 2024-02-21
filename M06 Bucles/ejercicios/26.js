function esAnagrama(str1, str2) {
  // La función recibe dos argumentos "str1" y "str2" que son strings.
  // Determina si los dos strings son anagramas.
  // Devuelve true de ser así, sino retorna false.
  // IMPORTANTE: Un anagrama es una palabra que se forma
  // con las mismas letras que otra, pero en orden diferente.
  // Tu código:
  let stringOrdenado1 = str1.split("").sort().join("");
  let stringOrdenado2 = str2.split("").sort().join("");
  console.log(stringOrdenado1);
  console.log(stringOrdenado2)
  if (stringOrdenado1 === stringOrdenado2) {
    return true;
  } else {
    return false;
  }
}
console.log(esAnagrama("cipayo", "frase"));
module.exports = esAnagrama;
