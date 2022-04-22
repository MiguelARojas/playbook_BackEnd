// Declaramos nuestra clase
class SpiderMan{
    constructor(name,age,actor,movies,studio){
        this.name = name
        this.age = age
        this.actor = actor
        this.movies = movies
        this.studio = studio
    }

    getInfo(name,studio) {
        return `Hey, I'm ${this.actor} from ${this.studio}`
    }
}

// Exportamos nuestra clase
module.exports = SpiderMan