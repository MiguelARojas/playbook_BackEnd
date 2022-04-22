// Declaramos nuestra clase User
class User {
    constructor(id,username,name,bio,dateCreated,lastUpdated){
        this.id = id
        this.username = username
        this.name = name
        this.bio = bio
        this.dateCreated = dateCreated
        this.lastUpdated = lastUpdated
    }
}

// Exportamos nuestra clase User
module.exports = User