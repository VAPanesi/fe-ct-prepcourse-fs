function crearClasePersona() {
    class Persona {
      constructor(nombre, edad, hobbies, amigos) {
        // El constructor de la clase Persona recibe nombre (string), edad (integer), hobbies (array de strings), 
        // amigos (array de objetos)
        // Inicializar las propiedades de la persona con los valores recibidos como argumento
  
        // Tu código aca:
        this._nombre = nombre;
        this._edad = edad;
        this._hobbies = hobbies;
        this._amigos = amigos;
  
      }
  
      addFriend(nombre, edad) {
        // El método 'addFriend' recibe un string 'nombre' y un entero 'edad' y debe agregar un objeto:
        // { nombre: nombre, edad: edad} al arreglo de amigos de la persona.
        // No debe retornar nada.
  
        // Tu código aca:
        var objeto = { nombre: nombre, edad: edad };
        this._amigos.push(objeto);

  
      }
  
      addHobby(hobby) {
        // El método 'addHobby' recibe un string 'hobby' y debe agregarlo al arreglo de hobbies de la persona.
        // No debe retornar nada.
  
        // Tu código aca:
        this._hobbies.push(hobby);
  
      }
      getFriends() {
        // El método 'getFriends' debe retornar un arreglo con sólo los nombres del arreglo de amigos
        // de la persona.
        // Ej:
        // Suponiendo que la persona tiene estos amigos: [{nombre: 'martin', edad: 31},{nombre: 'toni', edad: 33}]
        // persona.getFriends() debería devolver ['martin', 'toni']
  
        // Tu código aca:
        var arraySoloNombres  = [];
        for (let i=0 ; i< this._amigos.length ; i++) {
          var amigo = this._amigos[i];
          for(var prop in amigo) {
            if (prop === "nombre") {
              arraySoloNombres.push(elemento[prop]);
            }
          }
        return arraySoloNombres;
        }
      }
        
    
  
      getHobbies() {
        // El método 'getHobbies' debe retornar un arreglo con los hobbies de la persona
        // Ej:
        // persona.getHobbies() debe devolver ['correr', 'dormir', 'nadar']
  
        // Tu código aca:
        return this._hobbies;
      }
  
      getPromedioEdad() {
        // El método 'getPromedioEdad' debe retornar el promedio de edad de los amigos de una persona
        // Ej:
        // Si la persona tuviera estos amigos:
        // {
        //   amigos: [{
        //     nombre: 'toni',
        //     edad: 33,
        //   }, {
        //     nombre: 'Emi',
        //     edad: 25
        //   }]
        // }
        // persona.getPromedioEdad() debería devolver 29 ya que (33 + 25) / 2 = 29
  
        // Tu código aca:
        
      }
    };
    return Persona;
  }
  
const personaEjemplo = new Persona("Juan", 25, ["correr", "nadar"], []);
personaEjemplo.addFriend("Amigo1", 30);
personaEjemplo.addFriend("Amigo2", 28);
const amigosDePersona = personaEjemplo.getFriends();
console.log(amigosDePersona);
