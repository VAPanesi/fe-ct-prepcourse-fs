function colors(color) {
  // La función recibe un color. Retorna el string correspondiente:
  // En caso que el color recibido sea "blue"   --> "This is blue".
  // En caso que el color recibido sea "red"    --> "This is red".
  // En caso que el color recibido sea "green"  --> "This is green".
  // En caso que el color recibido sea "orange" --> "This is orange".
  // Si no es ninguno de esos colores           --> "Color not found".
  // PISTA: utilizar el statement SWITCH.
  // Tu código:
  let resultado;

  switch(color) {
    case "blue":
      resultado = "This is blue";
    break;

    case "red":
      resultado = "This is red";
    break;

    case "green":
      resultado = "This is green";
    break;

    case "orange":
      resultado = "This is orange";
    break;

    default:
      resultado = "Color not found";
  }
  return resultado;
}
console.log(colors("red"));
module.exports = colors;
