function nuevoUsuario(nombre, email, password) {
  // Debes crear un nuevo objeto.
  // Este debe tener las propiedades: "nombre", "email" y "password" con sus respectivos valores.
  // Retorna el objeto creado.
  // Tu código:
  var usuario = {
    nombre: nombre,
    email: email,
    password: password
  }
  return usuario;
}

var miUsuario = nuevoUsuario("valentina", "gmail", "12345")
console.log(miUsuario.nombre);
console.log(miUsuario.password);
console.log(miUsuario.email);
module.exports = nuevoUsuario;
