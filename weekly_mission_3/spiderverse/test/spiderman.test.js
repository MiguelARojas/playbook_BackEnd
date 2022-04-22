// exportamos nuestra clasem SpiderMan
const SpiderMan = require('./../app/spiderman')


describe("Test Suite Dummy Description", () => {
    test('1. Create an spiderman object', () => {
        // Declaramos nuestro objeto
        const TobbyMaguire = new SpiderMan("Spider Man", 46, "Tobby Maguire",4,"Marvel Entertainment")

        // generamos las validaciones
        expect(TobbyMaguire.name).toBe("Spider Man")
        expect(TobbyMaguire.age).toBe(46)
        expect(TobbyMaguire.actor).toBe("Tobby Maguire")
        expect(TobbyMaguire.movies).toBe(4)
        expect(TobbyMaguire.studio).toBe("Marvel Entertainment")

        expect(TobbyMaguire.getInfo()).toBe("Hey, I'm Tobby Maguire from Marvel Entertainment")
    });

})