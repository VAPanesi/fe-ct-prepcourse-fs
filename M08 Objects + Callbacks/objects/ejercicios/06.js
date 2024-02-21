const contarPropiedades = (objeto) => {
  // Cuenta y retorna el total de propiedades que tiene el objeto.
  // PISTA: Puedes iterarlo usando el bucle for-in.
  // Tu código:
  var contador = 0;
  for (var prop in objeto) {
    contador++;
  }
  return contador;
  };

var obj = {
  nombre: "fran",
  edad: 1,
  colorPelo:"rubio"
}
console.log(contarPropiedades(obj));
module.exports = contarPropiedades;
