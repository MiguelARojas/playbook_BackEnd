// declaramos nuestra clase
class Logger {
    constructor(name){
        this.name = name
    }

    // declaramos nuestro primer metodo
    info (message){
        console.log(`El nombre del Objeto: ${this.name} mensaje: ${message}`)
    }

    info2(message){
        console.log(`El nombre del Objeto: ${this.name} mensaje: ${message}`)
    }
}

// la clase se exporta en este modulo
module.exports = Logger