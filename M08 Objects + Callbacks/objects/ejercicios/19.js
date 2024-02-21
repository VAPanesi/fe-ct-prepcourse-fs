function pasarUsuarioAPremium(objetoMuchosUsuarios) {
  // El parámetro "objetoMuchosUsuarios" es un arreglo de objetos (usuarios).
  // Cada usuario tiene una propiedad llamada "esPremium".
  // Define esta propiedad de todos los usuarios como true.
  // Retornar el arreglo.
  // Tu código:
  for (let i=0 ; i<objetoMuchosUsuarios.length ; i++) {
    objetoMuchosUsuarios[i].esPremium = true;
  }
  return objetoMuchosUsuarios;
}

const usuarios = [
  { nombre: "Usuario1", esPremium: false },
  { nombre: "Usuario2", esPremium: false },
  { nombre: "Usuario3", esPremium: false }
];

console.log(pasarUsuarioAPremium(usuarios));

module.exports = pasarUsuarioAPremium;