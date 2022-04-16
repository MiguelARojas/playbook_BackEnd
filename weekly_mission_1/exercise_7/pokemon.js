class Pokemon {
    constructor(name){
        this.name = name
    }

    sayHello(){
        console.log(`My pokemon ${this.name} say hello `)
    }

    sayMessage(msg){
        console.log(`My pokemon ${this.name} say ${msg}`)
    }
}

module.exports = Pokemon