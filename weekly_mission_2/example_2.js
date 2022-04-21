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

// Ejemplo 7 - Setters para modificar atributos del objeto
class psp {
    constructor(nameDevice,company){
        this.nameDevice = nameDevice
        this.company = company
        this.games = 10
        this.batteryCondition = "Bad"
    }

    // declaramos nuestors getters
    get getGames(){
        return this.games
    }

    get getBatteryCondition(){
        return this.batteryCondition
    }

    // declaramos nuestros setters
    set setGames(games){
        this.games = games
    }

    set setBatteryCondition(batteryCondition){
        this.batteryCondition = batteryCondition
    }
}

console.log("\nThe information about my PSP")
const mypsp = new psp("PSP","SONY")
console.log(mypsp) // PSP, SONY, 10, BAD

console.log("\nThe information about my PSP update")
mypsp.setGames = 15
mypsp.setBatteryCondition = "Good"
console.log(mypsp) // PSP, SONY, 15, GOOD


// Ejemplo 8 - Método Static
// EL método Static nos ayuda a escribir metodos en una clase que podemos usar sin necesidad de instanciar algo
class programming {
    static getProgrammingCodes(){
        return ["C++","Python","Java","Javascript"]
    }
}

console.log("\nLos elementos de mi clase static")
console.log(programming.getProgrammingCodes()) 
/*  
    Podemos llamar al metodo directamente con el nombre de la clase
    pero si deseamos instanciar un objeto ya no podremos llamar al metodo
*/

// Ejemplo 9 - Herencia entre dos clases
class Family {
    constructor(name,members){
        this.name = name
        this.members = members
    }

    get getName() {
        return this.name
    }
}

console.log("\nNuestra clase sin herencia")
const newFamily = new Family('Macias',20)
console.log(newFamily)
console.log(newFamily.getName)

// Para poder hacer hernecia entre clases es con la palabra extends
class OtherFamily extends Family {
    // de esta manera podemos crear una clase que pueda usar las atributos de la otra clase
}

console.log("\nNuestra clase con herencia")
const myOtherFamily = new OtherFamily('Rojas',23)
console.log(myOtherFamily)
// incluso podemos hacer uso de sus metodos
console.log(myOtherFamily.getName)

// Ejemplo 10 - Overrinding methods
class Explorer{
    constructor(name, username, mission){
     this.name = name
     this.username = username
     this.mission = mission
    }
  
    getNameAndUsername(){
     return `Explorer ${this. name}, username: ${this.username}`
    }
  }
  
  class Viajero extends Explorer {
    constructor(name, username, mission, cycle){
      super(name, username, mission) // SUPER nos ayudará a llamar el constructor padre
      this.cycle = cycle // Agregamos este atributo de la clase Viajero, es exclusiva de esta clase y no de la clase padre
    }
  
    getGeneralInfo(){
      let nameAndUsername = this.getNameAndUsername() // llamamos el método de la clase padre
      // nameAndUsername  es una variable de esta función, no necesitas usar this para referenciarla.
      return `${nameAndUsername}, Ciclo ${this.cycle}`
    }
  }
  
  const viajero1 = new Viajero("Miguel", "Mikael", "BackEnd - NodeJS", "Abril 2022")
  console.log("\nNuestro primer viajero")
  console.log(viajero1)
  console.log("Método de la clase padre")
  console.log(viajero1.getNameAndUsername())
  console.log("Método de la clase hijo")
  console.log(viajero1.getGeneralInfo())