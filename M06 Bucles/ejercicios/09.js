function conection(status) {
  // El argumento "status" representa el estado de conexión de un usuario.
  // Si el estado es igual a 1, el usuario está "Online".
  // Si el estado es igual a 2, el usuario está "Away".
  // De lo contrario, presumimos que el usuario está "Offline".
  // Retornar el estado de conexión del usuario.
  // Tu código:
  var estado;

  switch(status) {
    case 1:
    estado = "Online";
    break;

    case 2:
    estado = "Away";
    break;

    default:
    estado = "Offline";
  }
  return estado
}

console.log(conection(2));
module.exports = conection;
