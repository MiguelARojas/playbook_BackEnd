import Viajero from "./viajero";

// de esta manera podemos modularizar clases y usarlas mediante modulos

const Travel = new Viajero("Miguel","Mikael","Node JS","Abril 2022")
console.log(Travel)
console.log(Travel.getUserNameAndMision()) // Metodo de la clase Explorer
console.log(Travel.getInfo()) // Metodo de la clase Viajero
