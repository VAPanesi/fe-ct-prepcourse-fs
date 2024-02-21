function tienePropiedad(objeto, propiedad) {
  // Verifica si el objeto recibido posee una propiedad con el mismo nombre que el parámetro "propiedad".
  // En ese caso, retorna true. Caso contrario, false.
  // Tu código:
return objeto.hasOwnProperty(propiedad);
}

const miObjeto = { nombre: "Ejemplo", edad: 25 };

console.log(tienePropiedad(miObjeto, "nombre"));  
console.log(tienePropiedad(miObjeto, "apellido"));
module.exports = tienePropiedad;
