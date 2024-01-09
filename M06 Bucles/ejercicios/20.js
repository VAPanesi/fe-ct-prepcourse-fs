function sumarHastaNConBreak(n) {
  // La función recibe un numero n por argumento.
  // Devuelve la suma de todos los números desde 1 hasta n.
  // Si la suma supera a 100, detén el bucle usando break.
  // Tu código:
  let suma = 0;
  for (let i = 1 ; i <= n ; i++) {
  suma += i //esto es igual que "suma = suma + i"
  console.log(`iteracion: ${i} suma = ${suma}`);
  
  if (suma > 100) {
  break;
}
}
return suma;
}
console.log(sumarHastaNConBreak(50));
module.exports = sumarHastaNConBreak;