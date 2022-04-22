// importamos nuestra clase User
const User = require('./../../app/user')

class UserService {
    static create(id,username,name){
        return new User(id,username,name,"Sin Bio Aun")
    }
}


// Exportamos nuestra clase
module.exports.UserService