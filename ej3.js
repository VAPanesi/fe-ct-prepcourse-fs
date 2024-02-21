function stringMasLarga(strings) {
    // La función llamada 'stringMasLarga', recibe como argumento un arreglo de strings llamado 'strings'
    // y debe devolver el string más largo que hay en el arreglo (Es decir el de mayor cantidad de caracteres)
    // Ej:
    // stringMasLarga(['hi', 'hello', 'ni hao', 'guten tag']); debe retornar 'guten tag'
    // stringMasLarga(['JavaScript', 'HTML', 'CSS']); debe retornar 'JavaScript'
  
    // Tu código aca:
    var mayorLongitud = strings[0];
    for (let i=0 ; i<strings.length ; i++) {
    if (strings[i].length > mayorLongitud.length) {
    mayorLongitud = strings[i];
    }
    }
    return mayorLongitud;
  }
console.log(stringMasLarga(['hi', 'hello', 'ni hao', 'guten tag']));
console.log(stringMasLarga(['JavaScript', 'HTML', 'CSS']));