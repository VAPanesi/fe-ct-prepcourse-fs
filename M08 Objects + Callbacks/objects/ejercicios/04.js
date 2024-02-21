function verificarPropiedad(objeto, propiedad) {
  // Verifica si el objeto posee la propiedad recibida.
  // Retorna true si la tiene, sino retorna false.
  // PISTA: Puedes usar el método hasOwnProperty().
  // Tu código:
// Verificamos si la propiedad existe directamente en el objeto y es enumerable
if (objeto.hasOwnProperty(propiedad) && Object.getOwnPropertyDescriptor(objeto, propiedad).enumerable) {
  return true;
}

// Verificamos si la propiedad es heredada
if (Object.getPrototypeOf(objeto)) {
  return verificarPropiedad(Object.getPrototypeOf(objeto), propiedad);
}

// Si no cumple ninguna condición, retornamos false
return false;
} 

var obj = {
nombre: "valentina",
edad: 23
}
console.log(verificarPropiedad(obj, "nombre"));
module.exports = verificarPropiedad;
