function actualizarPassword(objetoUsuario, nuevaPassword) {
  // Reemplaza la contraseña guardada en la propiedad "password" del "objetoUsuario".
  // La nueva contraseña la recibes por parámetro.
  // Retornar el objeto.
  // Tu código:
  objetoUsuario.password = nuevaPassword;
  return objetoUsuario;
}

const miObj = {usuario: "vapbril", password: "clave1234" };
console.log(actualizarPassword(miObj, "chau123"));
module.exports = actualizarPassword;
