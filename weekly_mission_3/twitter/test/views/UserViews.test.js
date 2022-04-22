// importamos nuestra clase UserView
const UserView = require('./../../app/views/UserViews')

describe("Test for UserView", () => {
    test("Return an error object when try to create a new user with an null payload", () => {
        // creamos nuestros objetos 
        const payload = null
        const result = UserView.createUser(payload)

        // realizamos nuestras validaciones
        expect(result.error).toMatch(/payload no existe/)
    })

    test("Return an error object when try to create a new user with payload with invalid properties", () => {
        const payload = {username: null, name: 12, id: "id"}
        const result = UserView.createUser(payload)

        // realizamos nuestras validaciones
        expect(result.error).toMatch(/necesitan tener un valor válido/)
    })

    test("Return an error object when try to create a new user with a payload with missing properties")
})