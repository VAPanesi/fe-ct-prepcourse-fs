function sumarLikesDeUsuario(objetoUsuario) {
  // El parámetro "objetoUsuario" tiene una propiedad llamada "posts" que es un arreglo.
  // Este arreglo contiene objetos (post).
  // Cada post posee una propiedad llamada "likes". Esta propiedad es un número.
  // Debes sumar los likes de todos los post y retornar el resultado.
  // Tu código:
  var suma = 0;
  for (let i=0 ; i<objetoUsuario.posts.length ; i++) {
    suma += objetoUsuario.posts[i].likes;
  }
  return suma;
}

const usuarios = {
  posts: [
    {likes: 3},
    {likes: 5},
    {likes: 10}
  ]
}
console.log(sumarLikesDeUsuario(usuarios));
module.exports = sumarLikesDeUsuario;
