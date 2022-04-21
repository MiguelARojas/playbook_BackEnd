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
    age: 22,
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


// Ejemplo 3 - Objeto con diferentes propiedades
console.log("\n")
const myThirdObject = {
    name: "Miguel",
    age: 22,
    alias: [ // en el caso del alias se declara con [] donde podemos acceder a su conetenido con las posiciones
        "Mikael",
        "Mika",
        "Mike"
    ],
    address: {
        zip_code: 45130,
        street: "Valdepeñas",
        suburb: "Real de Valdepeñas"
    }
}

console.log("Ejemplo 3. Creando un objeto con diferentes propiedades")
console.log(myThirdObject)
console.log("My name: " + myThirdObject.name)
console.log("My second alias: " + myThirdObject.alias[1])
console.log("My third alias: " + myThirdObject.alias[2])
console.log("My street address: " + myThirdObject["address"]["street"])


// Ejemplo 4 - Objeto con diferentes propiedades
console.log("\nEjemplo 4 - Creando un Objeto con metodos\n")

const petHamster = {
    name: "Daxter",
    age: "2 months",
    color: "black",
    sayHello: function () {
        console.log(`${this.name} say you hello`)
        console.log(`${this.name} have ${this.age} of age`)
    }
}

console.log("Ejemplo4. Objeto con métodos")
console.log(petHamster.name)
petHamster.sayHello()


// Ejemplo 5 - Objeto con métodos con parametros
console.log("\nEjemplo 5. Objeto con parametros en sus métodos")
const myHamster = {
    name: "Daxter",
    sayHelloTo: function(yourName){
        console.log(`${this.name} say's hello to ${yourName}`)
    }
}

console.log("\n")
console.log(myHamster)
myHamster.sayHelloTo("Miguel")