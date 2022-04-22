// importamos nuestra clase
const MissionCommander = require('./app/missionCommander')

// Instanciamos 3 objetos
const Miguel = new MissionCommander("Miguel")
const Daxter = new MissionCommander("Daxter")
const Ajolonauta = new MissionCommander("Woopa")

// Imprimimos nuestros objetos
console.log(Miguel.name)
console.log(Daxter.name)
console.log(Ajolonauta.name)

