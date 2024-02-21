const obtenerValorPropiedad = (objeto, propiedad) => {
  // Recibe un objeto y el nombre de una propiedad.
  // Devuelve el valor de esta propiedad.
  // Tu código:
  if (objeto.hasOwnProperty(propiedad)) {
    // Si existe, devuelve el valor de la propiedad
    return objeto[propiedad];
  } else {
    // Si la propiedad no existe, puedes devolver un valor predeterminado o null, según tus necesidades
    return undefined; // O podrías devolver otro valor predeterminado
  }
};


const objeto = {
  nombre: "Juan",
  edad: 30,
  direccion: {
    calle: "Calle Falsa",
    numero: 123,
    ciudad: "Springfield",
  },
};
console.log(obtenerValorPropiedad(objeto, "direccion["numero"]"));
module.exports = obtenerValorPropiedad;
