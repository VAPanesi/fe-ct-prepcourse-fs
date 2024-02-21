const agregarNuevaPropiedad = (objeto, propiedad, valor) => {
  // Añade una nueva propiedad al objeto con su respectivo valor pasado por la función.
  // Tu código:
  objeto[propiedad] = valor;
};

  var obj = {
  nombre: "javi",
  edad: 24
};
agregarNuevaPropiedad(obj, "comida", "burguer");
console.log(obj);

module.exports = agregarNuevaPropiedad;
