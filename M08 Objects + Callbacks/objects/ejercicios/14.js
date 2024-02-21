function tieneEmail(objetoUsuario) {
  // Verifica si el "objetoUsuario", en su propiedad "email", posee un valor definido.
  // En ese caso, retorna true. Caso contrario, false.
  // Tu código:
return objetoUsuario.hasOwnProperty("email") && objetoUsuario.email !== null && objetoUsuario.email !== undefined;
}

const usuario1 = { nombre: "John", email: "john@example.com" };
const usuario2 = { nombre: "Jane", email: null };
const usuario3 = { nombre: "Bob" };

console.log(tieneEmail(usuario1));  
console.log(tieneEmail(usuario2));  
console.log(tieneEmail(usuario3));  
module.exports = tieneEmail;
