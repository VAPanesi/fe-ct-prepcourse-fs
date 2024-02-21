function soloNumeros(array) {
    // La funcion llamada 'soloNumeros' recibe como argumento un arreglo de enteros y strings llamado 'array'.
    // Debe devolver un arreglo con solo los enteros.
    // Ej: 
    // soloNumeros([1, 'Henry', 2]) debe retornar [1, 2]
  
    // Tu código aca:
  var nuevo = [];
  for(let i=0; i<array.length ; i++) {
    if (Number.isInteger(array[i])) {
        nuevo.push(array[i])
    }
  }
  return nuevo;
}
console.log(soloNumeros([1, 'Henry', 2]));