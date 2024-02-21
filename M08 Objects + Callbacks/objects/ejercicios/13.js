function eliminarPropiedad(objeto, propiedad) {
  // El parámetro "propiedad" es una propiedad del objeto que recibes.
  // Debes eliminarla del objeto y retornarlo finalmente.
  // Tu código:
  delete objeto[propiedad];
  return objeto;
}

var obj = {
  nombre: "fran",
  edad: 1,
  colorPelo:"rubio"
}
console.log(eliminarPropiedad(obj, "nombre"));
module.exports = eliminarPropiedad;
