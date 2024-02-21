function agregarMetodoCalculoDescuento(objetoProducto) {
  // Agrega una propiedad al "objetoProducto" con el nombre "calcularPrecioDescuento".
  // Esta propiedad debe ser una función que multiplique el precio del producto por el porcentajeDeDescuento.
  // El "objetoProducto" posee una propiedad "precio" y una propiedad "porcentajeDeDescuento".
  // Luego debes restar del precio total del producto ese valor de descuento.
  // Retornar el precio final.
  // Ejemplo:
  // Precio ---> 10
  // PorcentajeDeDescuento ---> 0.2
  // Precio final ---> 8
  // Tu código:
  objetoProducto.calcularPrecioDescuento = function (){
    var resultado = objetoProducto.precio * objetoProducto.porcentajeDeDescuento;
    return objetoProducto.precio - resultado;
  }
  return objetoProducto;
}

//  // Agrega la propiedad 'calcularPrecioDescuento' al objetoProducto
//  objetoProducto.calcularPrecioDescuento = function () {
//   // Calcula el precio final con descuento
//   return objetoProducto.precio * (1 - objetoProducto.porcentajeDeDescuento);
// };

// // Retorna el objetoProducto con la nueva propiedad
// return objetoProducto;
// }


const producto = {
  precio: 5,
  porcentajeDeDescuento: 0.5
};

console.log(agregarMetodoCalculoDescuento(producto));

module.exports = agregarMetodoCalculoDescuento;
