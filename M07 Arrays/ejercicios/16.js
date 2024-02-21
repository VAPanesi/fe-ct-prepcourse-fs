function mesesDelAño(array) {
  // El array contiene algunos meses del año desordenados. Debes recorrerlo, buscar los meses "Enero",
  // "Marzo" y "Noviembre", guardarlos en un nuevo arreglo y retornarlo.
  // Si alguno de los meses no está, retornar el string: "No se encontraron los meses pedidos".
  // Tu código:
 var nuevo = [];
 for(let i=0 ; i<array.length ; i++) {
  if (array[i] === "Enero" || array[i] === "Marzo" || array[i] === "Noviembre"){
    nuevo.push(array[i]);  
    }
  }
 if(nuevo.length === 3) {
  return nuevo;
 } else {
  return "No se encontraron los meses pedidos";
}
}
var ejemplo1 = [
  'Diciembre',
  'Abril',
  'Junio',
  'Julio',
  'Noviembre',
  'Enero',
  'Mayo',
  'Febrero',
];
console.log(mesesDelAño(ejemplo1));
module.exports = mesesDelAño;
