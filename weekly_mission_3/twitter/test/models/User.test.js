// importamos nuestra clase user
const User = require('../../app/user')

describe('Unit Tests for User Class', () => {
    test('1. Create an User Object', () => {
        // creamos un objeto de nuestra clase User
        const newUser = new User(1,"Mikael","Miguel","Bio")

        // generamos las pruebas
        expect(newUser.id).toBe(1)
        expect(newUser.username).toBe("Mikael")
        expect(newUser.name).toBe("Miguel")
        expect(newUser.bio).toBe("Bio")
        expect(newUser.dateCreated).not.toBeUndefined()
        expect(newUser.lastUpdated).not.toBeUndefined()

    });
})