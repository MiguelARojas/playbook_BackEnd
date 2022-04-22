// importamos nuestra clase User
const User = require('./../models/user')

class UserService {

    static create(id, username, name) {
        return new User(id, username, name, "Sin Bio Aun")
    }

    static  getInfo(User) {
        return [User.id, User.username, User.name, User.bio]
    }

    static updateUsername(username){
        this.username = username
    }
}
// Exportamos nuestra clase
module.exports = UserService