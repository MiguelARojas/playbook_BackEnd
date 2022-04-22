// Importamos nuestra clase UserService
const UserService = require('./../../app/services/UserService')

describe("Tests for UserService", () => {
    test("1. Tests for UserService", () => {
        // creamos un objeto de nuestra clase sin instanciarlo
        const newUser = UserService.create(1,"Mikael","Miguel");

        // realizamos nuestras validaciones
        expect(newUser.id).toBe(1);
        expect(newUser.username).toBe("Mikael");
        expect(newUser.name).toBe("Miguel");
        expect(newUser.bio).not.toBeUndefined();
    })

    test("2. Test getInfo for UserService", () => {
        //creamos nuestros objetos
        const newUser = UserService.create(2,"Kevinpt2","Kevin")
        const InfoList = UserService.getInfo(newUser)

        expect(InfoList[0]).toBe(2)
        expect(InfoList[1]).toBe("Kevinpt2")
        expect(InfoList[2]).toBe("Kevin")
        expect(InfoList[3]).toBe("Sin Bio Aun")
    })

    test("3. Update username", () => {
        // creamos nuestro objeto
        const newUser = UserService.create(3,"NobleVictor","Victor")
        // llamamos a nuestra funcion para actualizar el username
        UserService.updateUsername(newUser, "Victor")

        // generamos nuestras validaciones
        expect(newUser.username).toBe("NobleVictor")


    })
})