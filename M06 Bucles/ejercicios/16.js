function saludo(idioma) {
  // Retornar un saludo en tres diferentes lenguajes:
  // Si "idioma" es "aleman", devuelve "Guten Tag!".
  // Si "idioma" es "mandarin", devuelve "Ni Hao!".
  // Si "idioma" es "ingles", devuelve "Hello!".
  // Si "idioma" no es ninguno de los anteriores o es `undefined`, devuelve "Hola!".
  // Tu código:
  let saludos;

  switch(idioma) {
    case "aleman":
      saludos = "Guten Tag!"
    break;
    
    case "mandarin":
      saludos = "Ni Hao!"
    break;

    case "ingles":
      saludos = "Hello!"
    break;

    default:
      saludos = "Hola!"
  }
return saludos;
}
console.log(saludo("mandarin"));
module.exports = saludo;
