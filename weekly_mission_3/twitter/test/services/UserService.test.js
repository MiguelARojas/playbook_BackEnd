// Importamos nuestra clase UserService
const User = require('../../app/user');
const UserService = require('./../../app/services/UserService')

describe("Tests for UserService", () => {
    test("1. Tests for UserService", () => {
        // creamos un objeto de nuestra clase sin instanciarlo
        const newUser = UserService.create(1,"Mikael","Miguel")

        // realizamos nuestras validaciones
        expect(newUser.id).toBe(1)
        expect(newUser.username).toBe("Mikael")
        expect(newUser.name).toBe("Miguel")
        expect(newUser.bio).not.toBeUndefined()
    });
})