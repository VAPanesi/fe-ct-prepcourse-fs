function actualizarValorPropiedad(objeto, propiedad, valor) {
  // Actualiza el valor de la propiedad del objeto recibidos en la función.
  // Retorna el objeto actualizado.
  // Tu código:
  objeto[propiedad] = valor;
  return objeto;
}

var miObjeto = {
  nombre: "Javi"
};

actualizarValorPropiedad(miObjeto, "edad", 24);
console.log(miObjeto);

module.exports = actualizarValorPropiedad;
