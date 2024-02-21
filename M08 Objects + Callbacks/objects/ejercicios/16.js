function verificarPassword(objetoUsuario, password) {
  // Verifica si la propiedad "password" del "objetoUsuario" coincide con el parámetro "password".
  // En ese caso, retorna true. Caso contrario, false.
  // Tu código:
  return objetoUsuario.password === password;
}

const usuario1 = { nombre: "John", password: "clave123" };
const usuario2 = { nombre: "Jane", password: "otraclave" };

console.log(verificarPassword(usuario1, "clave123")); 
console.log(verificarPassword(usuario2, "clave123"));
module.exports = verificarPassword;
