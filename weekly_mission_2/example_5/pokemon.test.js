import Pokemon from "./pokemon";

test('1) Creando un nuevo pokemon', () => {
    const myPokemon = new Pokemon("Pikachu")
    expect(myPokemon.name).toBe("Pikachuss");
});