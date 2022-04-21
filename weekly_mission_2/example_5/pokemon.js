export default class Pokemon {
    constructor(name, type, age){
        this.name = name
        this.type = type
        this.age = age
        this.attacks = []
    }

    get getAttacks(){
        return this.attacks
    }

    set setAttacks(attacks){
        return this.attacks = this.attacks
    }
}

const myPokemon = new Pokemon("Pikachu","Electro",5)