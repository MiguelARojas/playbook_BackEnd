import Explorer from './explorer.js';

export default class Viajero extends Explorer {
    constructor(name,username,mission,cycle){
        super(name, username, mission)
        this.cycle = cycle
    }

    getInfo(){
        let nameAndUsername = this.getUserNameAndMision()
        return `${this.nameAndUsername}, Ciclo: ${this.cycle} `
    }
}