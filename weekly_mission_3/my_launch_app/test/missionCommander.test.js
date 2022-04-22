const MissionCommander = require('./../app/missionCommander')
// importamos nuestra clase missionCommander

describe("Unit Tests for Mission Commander Class", () => {
    test('Create Mission Commander Object', () => {
        // Instanciamos nuestra clase en un objeto
        const MyMissionCommander = new MissionCommander("Valente")
        // Realizamos la prueba de lo que recibimos y lo que esperamos obtener
        expect(MyMissionCommander.name).toBe("Valente")
    });
})