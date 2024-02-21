function agregarAmigo(objetoUsuario, nuevoAmigo) {
  // El parámetro "objetoUsuario" tiene una propiedad llamada "amigos" igual a un arreglo.
  // Debes agregar el "nuevoAmigo" al final de este arreglo.
  // Retornar el objeto.
  // Tu código:
  objetoUsuario.amigos.push(nuevoAmigo);
  return objetoUsuario;
}

const miObj = {
  nombre: "valen",
  edad: 24,
  amigos: ["Flor", "Meli", "Giuli"]
}
console.log(agregarAmigo(miObj, "Martu"));
module.exports = agregarAmigo;
