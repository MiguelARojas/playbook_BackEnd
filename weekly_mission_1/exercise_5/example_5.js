class Logger {
    constructor(name) {
        this.count = 0
        this.name = name
    }

    log(message){
        this.count++ //aumentamos el contador al llamar nuestro metodo
        console.log('['+ this.name +'] ' + message)
    }
}

// instanciamos nuestro objeto y lo exportamos
module.exports = new Logger('DEFAULT') 

