const MissionCommander = require('./../app/missionCommander')


describe("Unit Tests for Mission Commander Class", () => {
    test('Create Mission Commander Object', () => {
        const MyMissionCommander = new MissionCommander("Valente")
        expect(MyMissionCommander.name).toBe("Valente")
    });
})