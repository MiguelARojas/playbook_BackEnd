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

// Ejemplo 4 - Metodos con los objetos
class Movie {
    constructor(name,duration,date,actors,language){
        this.name = name
        this.duration = duration
        this.date = date
        this.actors = actors
        this.language = language
    }

    // creamos un metodo dentro de nuestra clase
    getMovie(){
        return `Movie: ${this.name}, Duration: ${this.duration}, Actors: ${this.actors}`
    }
}

console.log("\nNuestra pelicula es: ")
const MyMovie = new Movie("Harry Potter",2.30,"21/04/2022",['Daniel Radcliffe', 'Rupert Grint', 'Emma Watson'],['Spanish','English','Portuges'])
console.log(MyMovie.getMovie())

// Ejemplo 5 - Atriibutos con valores por default
class Store {
    constructor(name,schedule,score){
        this.name = name
        this.schedule = schedule
        this.score = score
        this.dateCreated = new Date() // nos guardara la fecha en la que se creo el objeto
    }

    // creamos un metodo dentro de nuestra clase
    getStore(){
        return `Store Name: ${this.name}, Schedule: ${this.schedule}, Score: ${this.score}, Date of the score: ${this.dateCreated}`
    }
}

console.log("\nThe information about my store")
const MyStore = new Store("Apple Store","08:00 - 22:00",5) // no es necesario mandar el dateCreated ya que solo se asigna
console.log(MyStore.getStore())

// Ejemplo 6 - Getters para acceder a la informacion de nuestro objeto
class califications {
    constructor(spanish,math,science){
        this.spanish = spanish
        this.math = math
        this.science = science
    }

    get getCalification() {
        return this.math // En este caso nomas retornaremos la calificacion de matematicas
    }
}

console.log("\nMi calificacion de matematicas")
const Mycalification = new califications(85,96,99)
console.log(Mycalification.getCalification)