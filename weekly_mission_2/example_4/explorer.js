export default class Explorer {
    constructor(name,username,mission){
        this.namem = name
        this.username = username
        this.mission = mission
    }

    getUserNameAndMision(){
        return `Username: ${this.username}, Mission: ${this.mission}`
    }
}