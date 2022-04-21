console.log("Semana 2 - Example 0\n")
    // Ejemplo 1 - Como crear un objeto en Js
const myFirstObject = {} // de esta manera se crea un objeto vacio
console.log("Ejemplo 1. Creando un Objeto Vació")

// imprimimos nuestro objeto
console.log(myFirstObject) // nos debe imprimir {}


// Ejemplo 2 - Crear un objeto con propiedadesp o valores
const mySecondObject = {
    name: "Miguel",
    lastName: "Rojas",
    age: "22",
    city: "Guadalajara",
    school: "CUCEI",
    pets: "1 Hamster, 2 Dogs"
}

// agregamos un salto de linea para que se vizualice mejor la consola
console.log("\n")

console.log("Ejemplo 2. Creando un objeto con propiedades o valores")

// podemos imprimir el objeto directamente
console.log("Imprimiendo mi objeto")
console.log(mySecondObject)

// agregamos un salto de linea para que se vizualice mejor la consola
console.log("\n")

// o podemos imprimir cierta informacion del objeto
console.log("Imprimiendo valores de mi objeto")
console.log(mySecondObject.name)
console.log(mySecondObject.lastName)
console.log(mySecondObject.pets)