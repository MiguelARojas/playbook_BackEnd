// llamamos nuestro archivo donde tiene nuestros metodos
const Pokemon = require('./pokemon')

const pikachu = new Pokemon("pikachu")
const bulbasaur = new Pokemon("bulbasaur")
const squirtle = new Pokemon("squirtle")

pikachu.sayHello()
pikachu.sayMessage("Hello World")

bulbasaur.sayHello()
bulbasaur.sayMessage("I'm alive")

squirtle.sayHello()
squirtle.sayMessage("This is my last message")