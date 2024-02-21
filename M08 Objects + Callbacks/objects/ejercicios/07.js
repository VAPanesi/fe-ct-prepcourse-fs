// Crea un objeto con propiedades anidadas y un método que acceda a una de las propiedades anidadas utilizando `this`.

const objetoAnidado = {
    propiedad1: 'Hola',
  propiedad2: 'Mundo',
  propiedad3: {
    propiedad4: 'Esta',
    propiedad5: "es",
    propiedad6: {
      propiedad9: function() {
        return "valor7";
      }
    }
  }
};
module.exports = objetoAnidado;
