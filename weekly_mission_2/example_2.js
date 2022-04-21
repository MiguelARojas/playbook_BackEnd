// Ejemplo 1 - Clase Vacía
class animal {
}
console.log("\nEjemplo 1 - Creando una clase vacía")
console.log(animal)

// Ejemplo 2 - Objeto a partir de una clase
class game {
}
const myGame = new game() // podemos crear varios objetos de la clase game
console.log("\nEjemplo 2 - Creando un objeto a partir de una clase")
console.log("My class is: ")
console.log(game)
console.log("My object is: ")
console.log(myGame)


// Ejemplo 3 - Objeto con atributos
class person {
    constructor(name,age,weight,height){
        this.name = name
        this.age = age
        this.weight = weight
        this.height = height
    }
}

// crearemos un objeto a partir de la clase
const Miguel = new person("Miguel",22,94,1.87)
console.log("\nNuestro objeto con atributos a partir de una clase")
console.log(Miguel)